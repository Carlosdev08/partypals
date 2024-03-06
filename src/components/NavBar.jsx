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
        className={`bg-teal-100  p-4 text-white flex justify-between items-center shadow-md fixed top-0 w-full z-50 ${isScrolled ? 'bg-opacity-50' : 'bg-opacity-90 backdrop-blur-md'}`}
        role="navigation"
      >
        <Link 
          href="/" 
          className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Party Pals
        </Link>

        <ul className="flex justify-between gap-5 font-outfit items-center  font-semibold text-base ">
        <li className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            <Link href={"/events"} className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold font-outfit cursor-pointer relative z-10 group">
              Events
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800  rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Events</span>
            </Link>
          </li>
          <li className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            <Link href={"/activities"} className="overflow-hidden relative p-2 h-12 bg-slate-900 text-white  rounded-md  text-xl font-bold cursor-pointer  z-10 group">
              Activities
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800  rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-0 text-center z-10">Activities</span>
            </Link>
          </li>
          <li className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            <Link href={"/reserva"} className="overflow-hidden  w-32 p-2 h-12 bg-slate-900  text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
              Booking
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Booking</span>
            </Link>
          </li>
          <li className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Contacts
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-100 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Contacts</span>
          </li>
          <li className="overflow-hidden relative w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group">
            About
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">About</span>
          </li>
          <li className="overflow-hidden  w-32 p-2 h-12 bg-slate-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Faqs
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-slate-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Faqs</span>
          </li>
        </ul>
        <div className="px-4 cursor-pointer md:hidden"></div>
        <div className=" flex gap-6 p-2 rounded leading-7">
          <Link href="/login">
          <button
            onClick={user ? handleSignOut : null}
            className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
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
