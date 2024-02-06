"use client";
import React from "react";
import { auth } from "../../../lib/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  async function signOutUser() {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch("http://localhost:3000/api/signOut", {
      method: "POST",
    });

    if (response.status === 200) {
      router.push("/login");
    }
  }
  return (
    <div>
      protected route <br />
      <button onClick={signOutUser}>sign out</button>
    </div>
  );
};

export default Page;