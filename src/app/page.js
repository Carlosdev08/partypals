import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="text-center font-semibold font-Outfit ">
      <h1>Party Pals</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );
}
