import React from "react";
import { ProvideAuth } from "@/context/ProvideAuth";

const HomePage = ({ user }) => {
  return (
    <>
      <div className="  flex flex-col justify-center items-center text-center  min-h-sv ">
        <div className=" bg-pink-800 text-white pt-5 w-1/2 h-1/2 rounded">
          <h1 className="text-4xl pb-2">
          Welcome to PartyPals
          </h1>
      
       
        <p>
        The ideal place to plan your childrens birthday parties.
        </p>
      </div>
      </div>
    </>
  );
};

export default HomePage;
