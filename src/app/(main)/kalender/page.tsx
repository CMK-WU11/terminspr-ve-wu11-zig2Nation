"use client"
import Header from "@/Components/header"
import Footer from "@/Components/footer"
import { useEffect, useState } from "react"

export default function Kalender() {
    const [tilmeldteAktiviteter, setTilmeldteAktiviteter] = useState<any[]>([])

    useEffect(() => {
        //det her henter aktiviteter fra coockies
        const cookies = document.cookie.split(",")
        const tilmeldteAktiviteterCookie = cookies.find(cookie => cookie.startsWith("tilmeldteAktiviteter="))
        const aktvitetsData = tilmeldteAktiviteterCookie ? JSON.parse(tilmeldteAktiviteterCookie.split("=")[1]) : []
        setTilmeldteAktiviteter(aktvitetsData)
    }, [])
    return(
        <div>
            <Header headertitle="Kalender"/>
            <div>
                {tilmeldteAktiviteter.length > 0 ? (
                    <ul>
                        {tilmeldteAktiviteter.map((aktivitet, index) => (
                            <li key={index}>dans ID: {aktivitet.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>ingen tilmeldte...</p>
                )}
            </div>
            <Footer/>
        </div>
    )
}