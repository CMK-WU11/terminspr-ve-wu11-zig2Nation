"use client"
import Tilmeld from "@/actions/tilmeld"
import MultiKnap from "./multiKnap"

interface TilmeldButtonProps {
    danceId: string;
    added: boolean
}

export default function TilmeldButton({ danceId, added }: TilmeldButtonProps) {

    async function handleTilmeld() {
            await Tilmeld(danceId)
    
    }

    return (
        <>
            {!added ? <MultiKnap title="Tilmeld" onClick={handleTilmeld} /> : <button className="bg-[#5E2E53] w-[15em] h-[3em] text-white rounded-md shadow-2xl buttonAnimation">Afmeld</button>}
        </>
    )
}
