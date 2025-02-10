//dette er blevet taget fra en ældre opgave magler opgave
import { serverFetch } from "@/lib/serverFetch";
import Footer from "@/Components/footer";
import Header from "@/Components/header";
import Link from "next/link";
interface Aktiviteter {
    id: string;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: any
    asset: any

}

export default async function AlleDanse() {
    try {
        // Hent ejendom- og agentdata det her er for og slippe for og lave fetch alle steder med en server side function
        const aktiviteter: Aktiviteter[] = await serverFetch("http://localhost:4000/api/v1/activities");

        return (
            <>
                <Header headertitle="Aktiviteter"/>
                <ul className="p-4">
                    <Link href={`/detalje`}>
                    {aktiviteter.map((aktivitet) => (
                        <div className="relative max-w-xl mx-auto mt-5">
                        <img className="h-96 w-full object-cover rounded-xl" src={aktivitet.asset.url} alt="billed af de forskellige danse"/>
                        <div className="absolute inset-0 flex items-end justify-start h-full w-full">
                            <div className="w-full bg-[#E1A1E9] bg-opacity-85 p-3">
                                <p>{aktivitet.name}</p>
                                <p>{aktivitet.minAge}-{aktivitet.maxAge} år</p>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                    </Link>
                </ul>
                <Footer/>
            </>
        );
    } catch (error) {
        console.error("Fejl ved hentning af data:", error);
        return <h1>Fejl ved hentning af data</h1>;
    }
}




