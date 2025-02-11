import Splash from "../../public/splash-image.jpg"
import Logo from "../../public/Logo.png"
import Image from "next/image";
import MultiKnap from "./multiKnap";
import Link from "next/link";

export default function Front() {
  return (
    <div className="w-full h-screen bg-cover bg-center">
        <div className="w-full bg-cover bg-center">
            <Image src={Splash} alt="Splash billed" className="h-[100vh] object-cover"/>
        </div>

      <div className="absolute bottom-20">
        <Image src={Logo} alt="Logo" className="h-auto mb-[7em]"/>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <Link href="/alleDanse">
        <MultiKnap title="kom i gang"/>
        </Link>
      </div>
    </div>
  );
};
