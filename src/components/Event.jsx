"use client";

import { PartyPopper } from "lucide-react";
import { CarouselPlugin } from "./ui/CarouselPlugin";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Eevent = () => {
  return (
    <div className="bg-background-image1  bg-cover bg-center">
      <div className=" ">
      <div className="flex justify-center items-center min-h-sv pb-8 ">
        <div className=" bg-blue-800 font-outfit font-semibold text-white pt-5 rounded  mt-40">
          <div className="flex items-center justify-center gap-1 p-1 ">
            <h1 className="text-3xl font-outfit ">
              Celebrate your events with PartyPals
            </h1>
            <PartyPopper size={10} color="white" />
          </div>

          <p className="text-center pb-5 font-outfit text-sm">
            Here you can find all the events we offer for the party perfect.
          </p>
        </div>
      </div>
      <div className="font-outfit font-medium text-sm p-5 ">
        <article>
          <div className="font-outfit bg-neutral-300 text-center p-4 border rounded mb-2 text-lg  ">
            
            <div className="font-outfit font-semibold ">
              <p>
                Generous spaces designed for children to experience a
                Exceptional birthday party surrounded by your friends. We offer
                the opportunity to immerse yourself in the magic of a Childrens
                Park full of adventures, or the excitement of strategic Laser
                games Tag. In addition, you can enjoy our themed rooms.
                specially decorated for the occasion, each one offering a unique
                and enveloping atmosphere. Every holiday is crowned with a feast
                of flavors in a specially prepared snack, including a Exquisite
                cake for the honoree. At PartyPals, we We are committed to
                creating memories full of joy and laughter for each birthday
                boy.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-green-700 text-center flex flex-col items-center justify-center mb-5 animate-bounce font-semibold font-outfit text-2xl">
            Your event in the best leisure and fun center in your city!
            </span>
            <Link href="/reserva">
              <button
                className="text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-3xl font-semibold font-outfit"
                style={{ animation: "blink 5s infinite" }}
              >
                Book Now!
              </button>
            </Link>
          </div>
          <div className=" text-center text-2xl gap-10  animate-pulse">
            <p>
            Ask us and lets prepare a proposal adapted to your needs.
              needs!
            </p>
            <span className="text-black">
            From a group of 20 people to a maximum of 40
            </span>
            <p>Tell us what you need and we will prepare it.</p>
          </div>
          <div className="rounded font-outfit  text-center m-5 pt-5 ">
            <span className="rounded border-separate bg-slate-100 font-outfit font-medium">
            We have large bowling areas, childrens areas, recreation areas
              recreational and sports machines, the latest in machines
              virtual reality, bar/cafeteria area, catering to suit you.
              Contact us and celebrate a different event.
            </span>
          </div>
        </article>
        
          <div className=" text-[#221d23] font-outfit mt-20 w-full">
            <div className="   text-center flex flex-col items-center justify-center mb-40 ">
              <CarouselPlugin className="bg-teal-600 ">
                <Image
                  src="/PartyPals1.svg"
                  alt="party"
                  width={800}
                  height={800}
                />

                <Image
                  src="/eventHall.jpg"
                  alt="party"
                  width={600}
                  height={600}
                />

                <Image
                  src="/PartyPals2.svg"
                  alt="party"
                  width={600}
                  height={600}
                />

                <Image
                  src="/PartyPals3.svg"
                  alt="party"
                  width={600}
                  height={600}
                />

                <Image
                  src="/PartyPals4.svg"
                  alt="party"
                  width={600}
                  height={600}
                />

                <Image
                  src="/PartyPals5.svg"
                  alt="party"
                  width={600}
                  height={600}
                />
              </CarouselPlugin>
            </div>
          </div>
        
      </div>
      </div>
    </div>
  );
};

export default Eevent;
