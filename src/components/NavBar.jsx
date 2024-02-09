import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const NavBar = () => {
  return (
    <>
      <nav
        className=" container- backdrop-blur-sm flex  font-semibold font-outfit text-sm gap-8 justify-between w-full items-center h-16 bg-[#22251c] text-white relativem-0 p-0 z-50 cursor-pointer"
        role="navigation"
      >
        <Link href="/" className="p-2 rounded-full bg-white text-blue-500">
          Party Pals
        </Link>

        <ul className="flex justify-between gap-9 font-outfit font-semibold text-base ">
          <li>
            <Link href={"/events"} className="p-2 rounded-full bg-white text-blue-500 flex items-center">Envents</Link>
          </li>
          <li>
            <Link href={"/activities"} className="p-2 rounded-full bg-white text-blue-500 flex items-center">Activities</Link>
          </li>
          <li className="p-2 rounded-full bg-white text-blue-500">
            <Link href={"/reserva"}>Reserva</Link>
             </li>
          <li className="p-2 rounded-full bg-white text-blue-500">Contactos</li>
          <li className="p-2 rounded-full bg-white text-blue-500">Quienes Somos</li>
          <li className="p-2 rounded-full bg-white text-blue-500">Preguntas Frecuentes</li>
        </ul>
        <div className="px-4 cursor-pointer md:hidden"></div>
        <div className=" flex gap-6 p-2 rounded leading-7">
          <Link href="/login">
            <button className="bg-white text-blue-600 font-semibold font-outfit rounded leading-7 p-2 border">
              Iniciar Sesion
            </button>
          </Link>
          <Link href="/signup">
            <button
              className={`${buttonVariants} bg-white  font-semibold rounded font-outfit leading-7 p-2  text-blue-600`}
            >
              Registrarse
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
