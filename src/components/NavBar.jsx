"use client";

import Link from "next/link";
import React from "react";
import { auth } from "@/lib/firebase-config";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { set } from "date-fns";


const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    window.addEventListener('scroll',() =>{
      setIsScrolled(window.scrollY > 50);
    })

    return () => unsubscribe();
    window.removeEventListener('scroll', () =>{
      setIsScrolled(window.scrollY > 40);
    })
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };


  return (
    <>
      <nav
        className={`bg-white p-4 text-white flex justify-between items-center shadow-md fixed top-0 w-full z-50 ${isScrolled ? 'bg-opacity-50' : 'bg-opacity-90 backdrop-blur-md'}`}
        role="navigation"
      >
        <Link href="/" className=" font-outfit font-semibold p-2 rounded border bg-blue-950 text-white border-spacing hover:bg-blue-600 items-center flex">
          Party Pals
        </Link>

        <ul className="flex justify-between gap-9 font-outfit font-semibold text-base ">
          <li>
            <Link href={"/events"} className="p-2 rounded border bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibold items-center flex">Envents</Link>
          </li>
          <li>
            <Link href={"/activities"} className="p-2 rounded border bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibold items-center flex ">Activities</Link>
          </li>
          <li className="p-2 rounded border bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibold items-center flex ">
            <Link href={"/reserva"}>Booking</Link>
             </li>
          <li className="p-2 rounded border bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibold items-center flex cursor-pointer  ">Contacts</li>
          <li className="p-2 rounded border bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibold items-center flex cursor-pointer ">About</li>
          <li className="p-2 rounded bborder bg-[#a444b8] text-white border-spacing hover:bg-[#401d46] font-outfit font-semibolditems-center flex cursor-pointer ">Faqs</li>
        </ul>
        <div className="px-4 cursor-pointer md:hidden"></div>
        <div className=" flex gap-6 p-2 rounded leading-7">
          <Link href="/login">
          <button
      onClick={user ? handleSignOut : null}
      className="border bg-blue-950 text-white border-spacing hover:bg-blue-600 font-semibold font-outfit rounded leading-7 p-2  "
    >
      {user ? 'Sign off' : 'Log in'}
    </button>
          </Link>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
