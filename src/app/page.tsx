import MultiKnap from "@/Components/multiKnap";
import Splash from "../../public/splash-image.jpg"
import Logo from "../../public/Logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <Image src={Splash} alt="splash baggrund"  className=""/>
        <Image src={Logo} alt="firma logo"/>
        <Link href="/alleDanse"><MultiKnap title="kom i gang"/></Link>
      </div>
    </>

  );
}
