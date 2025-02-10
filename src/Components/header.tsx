interface HeaderProps{
    headertitle: string
}
export default function Header({ headertitle }: HeaderProps) {
    return(
        <header className="p-4">
            <h1 className="text-white text-[36px]">{headertitle}</h1>
        </header>
    )
}