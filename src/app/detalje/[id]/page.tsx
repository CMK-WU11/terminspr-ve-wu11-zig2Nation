import { serverFetch } from "@/lib/serverFetch";
import MultiKnap from "@/Components/multiKnap";
import Footer from "@/Components/footer";
import Tilmeld from "@/actions/tilmeld";
import TilmeldButton from "@/Components/tilmeldButton";

// Agent interface (tilføjet antagede felter for informationer)
interface Detaljer {
    id: string | number;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: string;
    asset: any;
}


export default async function Detalje({ params }: {params : { id : string}}) {
    try {
        // hent detaljer om dansende og for undgå og lave fetch kald alle steder bruger vi server side function
        const detalje: Detaljer = await serverFetch(`http://localhost:4000/api/v1/activities/${params.id}`);
        console.log(detalje);

        
        return (
            <>
            <article className="w-full bg-cover bg-center">
                <div className="w-full bg-cover bg-center h-[25em] ">
                    <img src={detalje.asset.url} alt="" className="h-full w-full object-cover"/>
                </div>
                <div className=" ml-32 mt-[-4em] absolute">
                  <TilmeldButton danceId={params.id}/>
                </div>
            </article>
            <div>
            <section>
                <article className="p-5 text-white gap-4 text-lg">
                    <h2 className="text-2xl">{detalje.name}</h2>
                    <p>{detalje.minAge}-{detalje.maxAge} år</p>
                    <p>{detalje.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid sint saepe possimus quam, in corporis! Hic atque cumque optio. Optio enim numquam veniam nam, odio minima quia. Distinctio, pariatur.</p>
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