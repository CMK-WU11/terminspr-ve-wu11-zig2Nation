//dette er blevet taget fra en ældre opgave magler opgave
import { serverFetch } from "@/lib/serverFetch";
import Header from "@/Components/header";
import Footer from "@/Components/footer";
import { IoIosSearch } from "react-icons/io";
interface Søg {
    id: string | number;
    name: string;
    description: string;
    minAge: number;
    maxAge: number;
    url: any
    asset: any
}

export default async function Search() {
    try {
        // Hent ejendom- og agentdata det her er for og slippe for og lave fetch alle steder med en server side function
        const navigation: Søg[] = await serverFetch("http://localhost:4000/api/v1/activities");

        return (
            <>
            
                <Header headertitle="Søg"/>
                <section className="p-4">
                    <form className="max-w-md mx-auto">
                        <div className="relative flex flex-row-reverse">
                            <div className="flex items-center justify-center">
                                <IoIosSearch className="absolute flex items-center justify-center text-white"/>
                            </div>
                            <label htmlFor="søg" className="w-full">
                                <input type="search" className="w-full bg-[#E1A1E9] bg-opacity-25 h-9 p-4 text-white"/>
                            </label>
                        </div>
                    </form>


                <ul>
                    <li>
                        {navigation.map((result) => (
                            <div className="relative max-w-xl mx-auto mt-5">
                            <img className="h-64 w-full object-cover rounded-xl" src={result.asset.url} alt="billed af de forskellige danse"/>
                            <div className="absolute inset-0 flex items-end justify-start h-full w-full">
                                <div className="w-full bg-[#E1A1E9] bg-opacity-85 p-3">
                                    <p>{result.name}</p>
                                    <p>{result.minAge}-{result.maxAge} år</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </li>
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