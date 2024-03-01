import React from "react";

import { FormContextProvider } from "@/context/FormContext";
import Image from "next/image";
import ImageGallery from "./ImageGallery";
import TypingEffect from "@/utils/TypingEffect";
import Link from "next/link";

const HomePage = () => {
  return (
    <FormContextProvider defaultValues={{}}>
      <div className="bg-white">
        <div className="  flex flex-col justify-center items-center text-center mb-20 bg-  ">
          <div className="">
            <h1 className="text-7xl mt-40 pb-2 font-extrabold font-sans text-[#3d1645]">
              Welcome to PartyPals
            </h1>

            <TypingEffect
              text="The ideal place to plan your childrens birthday parties."
              className="font-outfit font-semibold text-lg text-[#3d1645] bg-blue-100 border rounded bg-transparent"
            />
          </div>
        </div>

        <div>
          <div>
            <div className="flex  justify-center items-center flex-col">
              <span className="text-center text-lg font-bold font-serif bg-stone-200 p-5 rounded shadow-lg m-5 flex flex-row items-center justify-center">
                At PartyPals Park we have a large play area with slides, ball
                pool, trampolines, American track, symbolic games area,
                construction games area, board games area and skill games area.
                We also have an electronic games area, virtual reality games
                area and much more... We are waiting for you!
              </span>
              <Link href="/reserva">
                <button
                  className="text-center bg-blue-950 text-white px-4 py-2 rounded font-outfit hover:bg-blue-800 text-3xl"
                  style={{ animation: "blink 6s infinite" }}
                >
                  Book Now!
                </button>
              </Link>
              <div></div>
            </div>
            <ImageGallery />
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
};

export default HomePage;
