"use client"
import { useGlobalState } from "../../app/layout";
import LogoUnisatc from "../../../public/Logo.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function FormLogin() {
  const router = useRouter();

  const { setUser } = useGlobalState();

  const [username, setUsername] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    setUser(username);

    router.push("/Dashboard");
  }
  
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
        onSubmit={handleSubmit}
    >
      <Image src={LogoUnisatc} alt="Logo UniSatc" />
      <input
        className="rounded-xl py-4 px-9 text-2xl text-left border-black border-solid border-2 outline-none"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="rounded-xl py-4 px-9 text-2xl text-left border-black border-solid border-2 outline-none"
        type="password"
        placeholder="Password"
      />
      <button type="submit" className="bg-green py-5 px-14 text-2xl rounded-full hover:brightness-90">
        Login
      </button>
    </form>
  );
}
