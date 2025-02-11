//dette er blevet taget fra en ældre opgave magler opgave
import { serverFetch } from "@/lib/serverFetch";
import Header from "@/Components/header";
import Footer from "@/Components/footer";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
interface Søg {
    id: string | number;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: string;
    asset: any;
}

export default async function Search() {
    try {
        // Hent ejendom- og agentdata det her er for og slippe for og lave fetch alle steder med en server side function
        const navigation: Søg[] = await serverFetch("http://localhost:4000/api/v1/activities");
        // fra linje 36 til linje 36 er genbrugt kode fra en anden opgave
        return (
            <>
            
                <Header headertitle="Søg"/>
                <section className="p-4">
                <form className="relative w-full max-w-sm">
                  <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white" size={30} aria-label="søge ikone forstørelsesglas"/>
                  <span></span>
                  <label htmlFor="">
                    <input
                      type="text"
                      className="w-full bg-[#C4C4C4] bg-opacity-25 h-11 p-4 text-white"
                    />
                  </label>
                </form>
                <ul className="p-4">
                    {navigation.map((results) => (
                    <Link href={`/detalje/${results.id}`}>
                    <div className="relative max-w-xl mx-auto mt-5">
                        <img className="h-96 w-full object-cover rounded-xl" src={results.asset.url} alt="billed af de forskellige danse"/>
                        <div className="absolute inset-0 flex items-end justify-start h-full w-full">
                            <div className="w-full bg-[#E1A1E9] bg-opacity-85 p-3 rounded-tr-2xl rounded-bl-2xl">
                            
                                <p>{results.name}</p>
                                <p>{results.minAge}-{results.maxAge} år</p>
                            </div>
                        </div>
                        
                    </div>
                    </Link>
                    ))}
                </ul>
                </section>
                <Footer/>
            </>
        );
    } catch (error) {
        console.error("Fejl ved hentning af data:", error);
        return <h1>Fejl ved hentning af data</h1>;
    }
}