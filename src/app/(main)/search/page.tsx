"use client";  // Sørg for at markere komponenten som client-side for at bruge hooks

import { useSearchParams } from "next/navigation";  // Importer useSearchParams fra next/navigation
import { useEffect, useState } from "react";
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

export default function SearchPage() {
  const searchParams = useSearchParams();  // Brug useSearchParams
  const queryFromUrl = searchParams.get("query");  // Få query-parameteren fra URL'en

  const [filteredResults, setFilteredResults] = useState<Søg[]>([]);
  const [query, setQuery] = useState(queryFromUrl || "");  // Sætter initialt værdi fra URL'en eller en tom streng

  useEffect(() => {
    // Hent data fra API'en
    const fetchData = async () => {
      try {
        const data: Søg[] = await serverFetch("http://localhost:4000/api/v1/activities");

        // Hvis der er en query, filtrer resultaterne
        if (query) {
          const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredResults(filtered);
        } else {
          setFilteredResults(data);  // Hvis der ikke er søgequery, vis alle resultater
        }
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      }
    };

    fetchData();
  }, [query]);  // Når query ændrer sig, bliver data opdateret

  // Opdater query-parameteren i URL'en når query ændrer sig
  useEffect(() => {
    if (query) {
      // Hvis der er en query, opdater URL'en
      window.history.pushState(null, '', `?query=${query}`);
    } else {
      // Hvis query er tom, fjern query-parametre
      window.history.pushState(null, '', window.location.pathname);
    }
  }, [query]);

  return (
    <>
      <Header headertitle="Søg" />
      <section className="p-4">
        <form className="relative w-full max-w-sm">
          <IoIosSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
            size={30}
            aria-label="søge ikone forstørelsesglas"
          />
          <input
            type="text"
            value={query}  // Bind input til query-staten
            onChange={(e) => setQuery(e.target.value)}  // Opdater query, når der skrives
            className="w-full bg-[#C4C4C4] bg-opacity-25 h-11 p-4 text-white"
            placeholder="Søg efter dans"
          />
        </form>

        <ul className="p-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((results) => (
              <Link href={`/detalje/${results.id}`} key={results.id}>
                <div className="relative max-w-xl mx-auto mt-5">
                  <img
                    className="h-96 w-full object-cover rounded-xl"
                    src={results.asset.url}
                    alt="billed af de forskellige danse"
                  />
                  <div className="absolute inset-0 flex items-end justify-start h-full w-full">
                    <div className="w-full bg-[#E1A1E9] bg-opacity-85 p-3 rounded-tr-2xl rounded-bl-2xl">
                      <p>{results.name}</p>
                      <p>{results.minAge}-{results.maxAge} år</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Ingen resultater fundet</p>
          )}
        </ul>
      </section>
      <Footer />
    </>
  );
}
