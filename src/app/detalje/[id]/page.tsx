import { serverFetch } from "@/lib/serverFetch";

// Agent interface (tilføjet antagede felter for informationer)
interface Detaljer {
    id: string | number;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: any;
    asset: any;
}

export default async function Detalje() {
    try {
        // Hent ejendom- og agentdata det her er for og slippe for og lave fetch alle steder med en server side function
        const detalje: Detaljer[] = await serverFetch("http://localhost:4000/api/v1/activities/1");

        return (
            <>
                <div>
                    {detalje.map((information) => (
                    <div className="relative max-w-xl mx-auto mt-5">
                        <img className="h-64 w-full object-cover rounded-xl" src={information.description} alt="billed af de forskellige danse"/>
                    </div>
                        
                    ))}
                </div>
            </>
            
        );
        
    } catch (error) {
        console.error("Fejl ved hentning af data:", error);
        return <h1>Fejl ved hentning af data</h1>;
    }
}