import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";
export default function Footer() {
    return(
        <footer className="bg-[#EAEAEA] w-full flex items-center justify-between p-4 fixed bottom-0">
            <Link className="flex items-center justify-center w-[2em] h-[2em] border border-black rounded-full" href="/aktiviteter" aria-label="til forsiden"><FiHome className=" w-[1.2em] h-[1.2em]"/></Link>
            <Link className="flex items-center justify-center w-[2em] h-[2em] border border-black rounded-full" href="/search" aria-label="til søg siden"><IoIosSearch className=" w-[1.2em] h-[1.2em]"/></Link>
            <Link className="flex items-center justify-center w-[2em] h-[2em] border border-black rounded-full" href="/kalender" aria-label="til dein kalender side"><CiCalendar className=" w-[1.2em] h-[1.2em]"/></Link>
        </footer>
    )
}