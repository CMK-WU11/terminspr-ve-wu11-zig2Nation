interface MultiKnapProps{
    title: string
}
export default function MultiKnap({ title }: MultiKnapProps) {
    return(
        <button className="bg-[#5E2E53] w-[15em] h-[3em] text-white rounded-md shadow-2xl">{title}</button>
    )
}