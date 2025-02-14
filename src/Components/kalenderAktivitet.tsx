import Link from "next/link";

interface AktivitetsKalender{
    
    name: string;
    weekday: number
    time: number
    id: string

}
export default function KalenderAktivitet({ aktivitet, isInstructor }: {aktivitet: AktivitetsKalender, isInstructor: boolean}) {
    return(
        <div className="p-4" key={aktivitet.name}>
        <Link href={`/${isInstructor ? "kalender" : "detalje"}/${aktivitet.id}`}>
        <section className="bg-[#EAEAEA] p-4 rounded-lg">
            <h2 className="text-4xl">{aktivitet.name}</h2>
            <p className="mt-1">{aktivitet.weekday} - {aktivitet.time}</p>
        </section>
        </Link>
    </div>
    )
}