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
            <ImageGallery />
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
};

export default HomePage;
