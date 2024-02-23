"use client";




import { PartyPopper } from "lucide-react";
import { CarouselPlugin } from "./ui/CarouselPlugin";
import Image from "next/image";
import React from "react";

const Eevent = () => {
  return (
    <div className="bg-background-image1  bg-cover bg-center">
      <div className="flex justify-center items-center min-h-sv pb-8 mt-3 ">
        <div className=" bg-blue-600 text-white pt-5 w-1/2 h-1/2 rounded">
          <div className="flex items-center justify-center gap-1 p-1">
            <h1 className="text-3xl ">Celebra tus eventos con PartyPals </h1>
            <PartyPopper size={10} color="white" />
          </div>
          <CarouselPlugin />
          <p className="text-center pb-5">
            Aquí podrás encontrar todos los eventos que ofrecemos para la fiesta
            perfecta.
          </p>
        </div>
      </div>
      <div className="font-outfit font-medium text-sm p-5 ">
        <article>
          <div className="font-outfit bg-neutral-300  text-center p-4 border rounded mb-2 text-lg  ">
            <span>
             
              En PartyPals, nos esforzamos por ofrecer a los niños y sus
              familias.
            </span>
            <p className="font-outfit font-semibold ">
          
              Espacios generosos diseñados para que los niños experimenten una
              fiesta de cumpleaños excepcional rodeados de sus amigos. Ofrecemos
              la oportunidad de sumergirse en la magia de un Parque Infantil
              lleno de aventuras, o la emoción de estratégicas partidas de Laser
              Tag. Además, pueden deleitarse en nuestras salas temáticas
              especialmente decoradas para la ocasión, cada una ofreciendo una
              atmósfera única y envolvente. Cada fiesta se corona con un festín
              de sabores en una merienda especialmente preparada, incluyendo una
              tarta exquisita para el homenajeado. En PartyPals, nos
              comprometemos a crear memorias llenas de alegría y risas para cada
              cumpleañero.
            </p>
          </div>
          <div>
            <span className="text-blue-900 text-center flex flex-col items-center justify-center mb-5 animate-bounce font-semibold font-sans text-2xl">
              !Tu evento en el mejor centro de ocio y diversión!
            </span>
          </div>
          <div className=" text-center text-2xl gap-10  animate-pulse">
            <p>
              !Pregúntanos y preparemos una propuesta adaptada a tus
              necesidades!
            </p>
            <span className="text-black">
              Desde grupo de 20 personas hasta un maxímo de 40
            </span>
            <p>dinos lo que necesitas y lo preparamos.</p>
          </div>
          <div>
            <p>
              Disponemos de amplias zonas de bowling, zonas infantiles, areas de
              máquinas recreativas y deportivas, lo último en máquinas de
              realidad virtual, zona de bar/cafetería, catering a tú medida.
              Ponte en contacto con nosotros y celebra un evento diferente.
            </p>
          </div>
        </article>
        <article>
          <div className=" text-[#221d23] font-outfit ">
            <div className="bg-[#e0dfe1]rounded-lg border text-center flex flex-col items-center justify-center mt-8">
              <CarouselPlugin className="bg-teal-600">
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
        </article>
      </div>
    </div>
  );
};

export default Eevent;
