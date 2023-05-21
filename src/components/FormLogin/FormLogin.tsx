import LogoUnisatc from "../../../public/Logo.svg";
import Image from "next/image";

export function FormLogin() {
  return (
    <form
      className="w-96
        bg-blue
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-10
        p-4
        rounded-10
        rounded-tl-40
        rounded-br-40"
    >
      <Image src={LogoUnisatc} alt="Logo UniSatc" />
      <input
        className="rounded-xl py-4 px-9 text-2xl text-left border-black border-solid border-2 outline-none"
        type="text"
        placeholder="Username"
      />
      <input
        className="rounded-xl py-4 px-9 text-2xl text-left border-black border-solid border-2 outline-none"
        type="password"
        placeholder="Password"
      />
      <button className="bg-green py-5 px-14 text-2xl rounded-full hover:brightness-90">
        Submit
      </button>
    </form>
  );
}
