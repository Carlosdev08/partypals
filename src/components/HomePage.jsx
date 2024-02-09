import React from "react";
import CalendarHome  from "@/components/ui/CalendarHome";
import { FormContextProvider } from "@/context/FormContext";


const HomePage = () => {
  return (
    <FormContextProvider defaultValues={{ dob: undefined }}>
    
      <div className="  flex flex-col justify-center items-center text-center  min-h-sv ">
        <div className=" bg-pink-800 text-white pt-5 w-1/2 h-1/2 rounded">
          <h1 className="text-4xl pb-2">Welcome to PartyPals</h1>

          <p>The ideal place to plan your childrens birthday parties.</p>
         
        </div>
        <article>
          <div className="font-semibold text-center p-8 text-sm">
            <p>Amplios espacios donde los más pequeños pueden celebrar un cumpleaños inolvidable junto a sus amigos. Podrán elegir entre celebrar en la Bolera o en el Parque Infantil, o bien combinarlos, y disfrutarán de nuestros cines 4D, salas tematizadas, Laser Tag y una deliciosa merienda con tarta para el cumpleañero. Un cumpleaños en PartyPals es garantía de diversión y entretenimiento.</p>
          </div>
        </article>
        <div className="grid items-start"> 

        <CalendarHome />
        </div>
       
      </div>
      </FormContextProvider>

  );
};

export default HomePage;
