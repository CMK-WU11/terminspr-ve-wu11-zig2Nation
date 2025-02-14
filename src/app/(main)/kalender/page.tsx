import Header from "@/Components/header"
import { cookies, headers } from "next/headers"
import KalenderAktivitet from "@/Components/kalenderAktivitet"
import Footer from "@/Components/footer"

export default async function Kalender() {
    const cookiStrore = await cookies()
    const token = cookiStrore.get("repe_token")?.value
    const id = cookiStrore.get("id")?.value

    try {
        const response = await fetch(`http://localhost:4000/api/v1/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = await response.json()
        
        const userActvities = data.activities

        if (data.activities.length > 0) {

            return (
                <>
                    <Header headertitle="Kalender"/>
                    {
                        userActvities.map((aktivitet: any) => {
                            return (
                                <>
                                    <div key={aktivitet.id}>
                                        <KalenderAktivitet 
                                            aktivitet={aktivitet} 
                                            isInstructor={false}
                                            key={id}
                                        />
                                    </div>

                                    <Footer/>
                                </>
                            )
                        })
                    }
                </>
            )
        }

        const resAktiviteter = await fetch("http://localhost:4000/api/v1/activities")
        const dataAktivitet = await resAktiviteter.json()

        const filteredData = dataAktivitet.filter((item: any) => id === JSON.stringify(item.instructorId))

        if (filteredData.length > 0) {

            return (
                <>
                    <Header headertitle="Kalender"/>
                    {
                        filteredData.map((aktivitet: any) => {
                            return (
                                <>
                                    <div key={aktivitet.id}>
                                        <KalenderAktivitet 
                                            aktivitet={aktivitet} 
                                            isInstructor={false}
                                            key={id}
                                        />
                                    </div>
                                    <Footer/>
                                </>
                            )
                        })
                    }
                </>
            )
        }

        return (
            <>
                <h1 className="text-white text-4xl mt-4">
                    Kalender
                </h1>
                <Footer/>
            </>
        )

    } catch (error: any) {
        throw new Error(error)
    }
}
