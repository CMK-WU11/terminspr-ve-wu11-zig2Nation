"use server"

import { cookies } from "next/headers"

export default async function Tilmeld(danceId: string) {
    try {
        const cookiStore = await cookies()
        const token = cookiStore.get("repe_token")

        if(!token) {
            return { error: " du skla være logget ind for og tilmelde dig"}
        }
        console.log("Token:", token.value);
        const response = await fetch("http://localhost:4000/api/v1/users/7/activities/" + danceId, {
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
        const tilmeldAktiviteter = JSON.parse(cookiStore.get("tilmeldAktiviteter")?.value || "[]")
        tilmeldAktiviteter.push({ activityId: danceId })

        cookiStore.set("tilmeldAktiviteter",JSON.stringify(tilmeldAktiviteter), {maxAge: 60 * 60 * 24})

        return{success: "du er tilmeldt dansen"}
        
    } catch(error) {
        return { error: "der opstod en fejl prøv igen"}
    }
}