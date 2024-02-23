"use client";

import Link from "next/link";
import React from "react";
import { auth } from "@/lib/firebase-config";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';


const NavBar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

 
    return () => unsubscribe();
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
        className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md"
        role="navigation"
      >
        <Link href="/" className=" font-outfit font-semibold p-2 rounded bg-white text-slate-950 border-spacing hover:bg-slate-200 items-center flex">
          Party Pals
        </Link>

        <ul className="flex justify-between gap-9 font-outfit font-semibold text-base ">
          <li>
            <Link href={"/events"} className="p-2 rounded bg-white text-slate-950 border-spacing hover:bg-slate-200 items-center flex">Envents</Link>
          </li>
          <li>
            <Link href={"/activities"} className="p-2 rounded bg-white text-slate-950  border-spacing hover:bg-slate-200 items-center flex ">Activities</Link>
          </li>
          <li className="p-2 rounded bg-white text-slate-950  border-spacing hover:bg-slate-200 items-center flex ">
            <Link href={"/reserva"}>Booking</Link>
             </li>
          <li className="p-2 rounded bg-white text-slate-950  hover:bg-slate-200 items-center flex cursor-pointer  ">Contacts</li>
          <li className="p-2 rounded bg-white text-slate-950  hover:bg-slate-200 items-center flex cursor-pointer ">About</li>
          <li className="p-2 rounded bg-white text-slate-950  hover:bg-slate-200 items-center flex cursor-pointer ">Faqs</li>
        </ul>
        <div className="px-4 cursor-pointer md:hidden"></div>
        <div className=" flex gap-6 p-2 rounded leading-7">
          <Link href="/login">
          <button
      onClick={user ? handleSignOut : null}
      className="bg-white text-blue-600 font-semibold font-outfit rounded leading-7 p-2 border hover:bg-slate-200 "
    >
      {user ? 'Cerrar Sesion' : 'Iniciar Sesion'}
    </button>
          </Link>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
