"use client"

import dynamic from "next/dynamic";

const FormBikeDetails = dynamic(() => import("../../components/FormBikeDetails/FormBikeDetails"), { ssr: false })

export default function CreateBikeDetails() {
  return <FormBikeDetails />;
}
