"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  const [allDances, setAllDances] = useState<Søg[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Hent "query" fra URL'en eller brug en tom string
  const queryFromUrl = searchParams.get("query") || "";
  const [query, setQuery] = useState(queryFromUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Søg[] = await serverFetch("http://localhost:4000/api/v1/activities");
        setAllDances(data);
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    

    const params = new URLSearchParams();
    if (newQuery) params.set("query", newQuery);
    router.push(`?${params.toString()}`, { scroll: false });
  };

 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Filtrer dansene efter hvad du søger efter
  const filteredResults = query
    ? allDances.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : allDances;

  return (
    <>
      <Header headertitle="Søg" />
      <section className="p-4">
        <form className="relative w-full max-w-sm" onSubmit={handleSubmit}>
          <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white" size={30} aria-label="søge ikon" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            className="w-full bg-[#C4C4C4] bg-opacity-25 h-11 p-4 text-white"
            placeholder="Søg efter dans"
          />
        </form>

        <ul className="p-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((results) => (
              <Link href={`/detalje/${results.id}`} key={results.id}>
                <div className="relative max-w-xl mx-auto mt-5">
                  <img className="h-96 w-full object-cover rounded-xl" src={results.asset.url} alt={results.name} />
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
            <p>Der blev ikke fundet nogle aktiviteter. Prøv at 
              søge efter noget andet.</p>
          )}
        </ul>
      </section>
      <Footer />
    </>
  );
}
