import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
              Sobre Nosotros
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
              Contacto
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
              Blog
            </Link>
          </div>
          
        </nav>
        <div className="mt-8 border-t border-gray-700 pt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
