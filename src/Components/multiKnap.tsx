interface MultiKnapProps{
    title: string;
    onClick: () => void;

}
export default function MultiKnap({ title, onClick }: MultiKnapProps) {
    return(
        <button onClick={onClick} className="bg-[#5E2E53] w-[15em] h-[3em] text-white rounded-md shadow-2xl buttonAnimation">
            {title}
        </button>
    )
}