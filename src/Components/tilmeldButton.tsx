"use client"
import Tilmeld from "@/actions/tilmeld"
import MultiKnap from "./multiKnap"
import { useState, useTransition } from "react"
interface TilmeldButtonProps {
    danceId: string
}

export default function TilmeldButton({ danceId }: TilmeldButtonProps) {
    const [message, setMessage] = useState("")
    const[isPending, startTransition] = useTransition()

    async function handleTilmeld() {
        startTransition(async () => {
            const result = await Tilmeld(danceId)
            if(result.success) {
                setMessage("du er nu tilmeldt")
            } else {
                setMessage("noget gik galt")
            }
        })
    }
    return(
        <>
        <MultiKnap title="Tilmeld" onClick={handleTilmeld}/>
        {message && <p className="text-white">{message}</p>}
        </>

    )
}