import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav
        className=" container- backdrop-blur-sm    flex  font-semibold font-outfit text-sm gap-8 justify-between w-full items-center h-16 bg-[#485529] text-white relativem-0 p-0 z-50 cursor-pointer"
        role="navigation"
      >
        <Link href="/" className="pl-8 font-semibold font-outfit">
          Party Pals
        </Link>

        <ul className="flex justify-between gap-9 font-outfit font-semibold text-base">
          <li>
            <Link href={"/events"}>Envents</Link>
          </li>
          <li>
            <Link href={"/activities"}>
            Activities
            </Link>
          </li>       
          <li>Reserva</li>
          <li>Contactos</li>
          <li>Quienes Somos</li>
          <li>Preguntas Frecuentes</li>
        </ul>
        <div className="px-4 cursor-pointer md:hidden"></div>
        <div className=" flex gap-6 p-2 rounded leading-7">
          <Link href="/login">
            <button className="bg-white text-black font-semibold font-outfit rounded leading-7 p-2 border">
              Iniciar Sesion
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-black font-semibold rounded font-outfit leading-7 p-2">
              Registrarse
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
