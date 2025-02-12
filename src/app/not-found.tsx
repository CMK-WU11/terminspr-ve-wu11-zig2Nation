import Link from "next/link"
 
export default function NotFound() {
  return (
        <div className="h-full w-ful bg-[#5E2E53] flex items-center justify-center">
            <section className="flex items-center justify-center flex-col h-[100vh] gap-7">
                <h1 className="text-white text-6xl font-semibold">HOV!</h1>
                <p className="text-white">denne side findes ikke..</p>
                <Link href="/alleDanse">
                    <button className="bg-[#EAEAEA] w-[15em] h-[3em] text-[#5E2E53] rounded-md shadow-2xl">Tilbage</button>
                </Link>
            </section>
            
        </div>
  )
}