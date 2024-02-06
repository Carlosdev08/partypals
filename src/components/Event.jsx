import { PartyPopper } from "lucide-react";
import Image from "next/image";
import React from "react";

const Eevent = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-sv pb-8">
        <div className=" bg-pink-800 text-white pt-5 w-1/2 h-1/2 rounded">
          <div className="flex items-center justify-center gap-1 p-1">
            <h1 className="text-3xl ">Celebra tus eventos con PartyPals </h1>
            <PartyPopper size={10} color="white" />
          </div>
          <p className="text-center pb-5">
            Aquí podrás encontrar todos los eventos que ofrecemos para la fiesta
            perfecta.
          </p>
        </div>
      </div>
      <div className="font-outfit font-medium text-sm p-5 ">
        <section>
          <div className="font-outfit bg-pink-600 text-center p-4 border rounded mb-2 text-white text-lg  " > 
          <span> En PartyPals, nos esforzamos por ofrecer a los niños y sus familias.</span>
          <p className="font-outfit font-medium p-2 "> Espacios generosos diseñados para que los niños experimenten una
          fiesta de cumpleaños excepcional rodeados de sus amigos. Ofrecemos la
          oportunidad de sumergirse en la magia de un Parque Infantil lleno de
          aventuras, o la emoción de estratégicas partidas de Laser Tag. Además,
          pueden deleitarse en nuestras salas temáticas especialmente decoradas
          para la ocasión, cada una ofreciendo una atmósfera única y envolvente.
          Cada fiesta se corona con un festín de sabores en una merienda
          especialmente preparada, incluyendo una tarta exquisita para el
          homenajeado. En PartyPals, nos comprometemos a crear memorias llenas
          de alegría y risas para cada cumpleañero.
            </p> 
             
          </div>
         
        </section>
        <article>
          <div className="grid grid-cols-2 text-white font-outfit">
            <div className="bg-[#e810c1] w-64 rounded border text-center flex flex-col items-center justify-center p-4 ">
            <Image className="rounded w-44 h-40"
                src="/eventsImage.jpg"
                alt="party"
                width={200}
                height={200}
                objectFit="contain"
              />
              <h2 className="text-2xl font-outfit font-medium ">Cumpleaños</h2>
             
              <span>
                Celebra el cumpleaños de tu hijo en nuestro centro. Disfrutaran
                de un Cumpleaño único
              </span>
            </div>
            <div className="bg-pink-800 w-64 h-64 rounded text-center flex flex-col items-center justify-center">
            <Image className="rounded w-20 h-20"
                src="/xanadu_bar.jpg"
                alt="party"
                width={100}
                height={100}
                objectFit="contain"
              />
              <h2 className="font-outfit ">Fiesta fin De Curso</h2>
              <span>
                Disfruta de una fiesta fin de curso con tus compañeros de clase.
              </span>
              
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Eevent;
