"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const user = useUser();

    if (user) {
      console.log(useUser());
    }
  }, []);
  return <SignIn />;
}
