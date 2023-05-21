import Image from "next/image";
import HeaderImg_1 from "../../../public/UniSatcImg.svg";
import HeaderImg_2 from "../../../public/UniSatcImg.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-around items-center p-2.5">
      <Image src={HeaderImg_1} alt="Logo + Nome Satc" width={224} />
      <nav className="w-80 flex items-center gap-5 justify-between p-3">
        <Link href="/">Home</Link>
        <Link href="LoginPage">Login</Link>
      </nav>
      <Image src={HeaderImg_2} alt="Logo + Nome UniSatc" width={224} />
    </header>
  );
}
