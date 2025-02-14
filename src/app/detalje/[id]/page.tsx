import { serverFetch } from "@/lib/serverFetch";
import Footer from "@/Components/footer";
import TilmeldButton from "@/Components/tilmeldButton";
import { cookies } from "next/headers";
import Link from "next/link";

interface Detaljer {
    id: string | number;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: string;
    asset: any;
    users: any[]
}

export default async function Detalje({ params }: {params : { id : string}}) {
    try {

        let userInfo = null

        const {id} = await params
        // hent detaljer om dansende og for undgå og lave fetch kald alle steder bruger vi server side function
        const detalje: Detaljer = await serverFetch(`http://localhost:4000/api/v1/activities/${id}`);

        const cookieStore = await cookies()


        const token = cookieStore.get("repe_token")?.value
        const brugerId = cookieStore.get("id")?.value
if (token && brugerId){

        const userresponse = await fetch(`http://localhost:4000/api/v1/users/${brugerId}`,
            {
            headers: {Authorization: `Bearer ${token}`}

            }
        )
        const userData = await userresponse.json();
        
        const nummerBrugerId = +brugerId
        
        const brugerIds = detalje.users.map((item: any) => item.id)

        const added = brugerIds.includes(nummerBrugerId)
        userInfo = {
            added: added,
            isInstructor: userData.role === "default"
        }
        
}
        
        return (
            <>
                <article className="w-full bg-cover bg-center">
                    <div className="w-full bg-cover bg-center h-[25em] ">
                        <img src={detalje.asset.url} alt="" className="h-full w-full object-cover"/>
                    </div>
                    <div className="ml-32 mt-[-4em] absolute">
                        {userInfo ? userInfo.isInstructor ? <TilmeldButton danceId={id} added={userInfo?.added}/> : null : <Link href="/login"><button className="bg-[#5E2E53] w-[15em] h-[3em] text-white rounded-md shadow-2xl buttonAnimation">Tilmed</button></Link>}
                    </div>
                </article>
                <div>
                    <section>
                        <article className="p-5 text-white gap-4 text-lg">
                            <h2 className="text-2xl">{detalje.name}</h2>
                            <p>{detalje.minAge}-{detalje.maxAge} år</p>
                            <p>{detalje.description}</p>
                        </article>
                    </section>
                </div>
                <Footer/>
            </>
        );

    } catch (error) {
        console.error("Fejl ved hentning af data:", error);
        return <h1>Fejl ved hentning af data</h1>;
    }
}
