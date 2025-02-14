"use server"
import { cookies } from "next/headers"

export default async function Tilmeld(danceId: string) {
    try {
        const cookiStore = await cookies()
        const token = cookiStore.get("repe_token")
        const id = cookiStore.get("id")

        if(!token || !id ) {
            return { error: " du skal være logget ind for og tilmelde dig"}
        }
        const response = await fetch(`http://localhost:4000/api/v1/users/${id.value}/activities/${danceId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.value}`,
            },
            body: JSON.stringify({ activityId: danceId})
        })
        if(!response.ok) {
            return{ error: "kunne ikke tlmelde dig. prøv igen"}
        }

        return{success: "du er tilmeldt dansen"}
        
    } catch(error) {
        return { error: "der opstod en fejl prøv igen"}
    }
}