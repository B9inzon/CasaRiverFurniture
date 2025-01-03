import Link from "next/link";
import React from "react";
import Logotipo from "./Logotipo";
import BurguerMenu from "./BurguerMenu";

const Navigation = () => {
  return (
    <nav
      className="flex items-center justify-between h-32 px-10 lg:px-28 fixed top-0 left-0 right-0 z-50  bg-[#f8f8fb]"
      id="Navigation"
    >
      <div className="flex items-center">
        <Link href="/">
          <Logotipo />
        </Link>
      </div>
      <ul className="hidden lg:flex lg:items-center justify-end  w-full space-x-10 text-xl text-[#19120c] ">
        <li className="hover:font-semibold transition-all duration-700 ease-in-out">
          <Link href="#Main">Inicio</Link>
        </li>
        <li className="hover:font-semibold transition-all duration-700 ease-in-out">
        <Link href="#Salas">Salas</Link>
        </li>
        <li className="hover:font-semibold transition-all duration-700 ease-in-out">
          <Link href="/">Acerca de nosotros</Link>
        </li>
        <li className="hover:font-semibold transition-all duration-700 ease-in-out">
          <Link href="/">Contáctanos</Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <BurguerMenu/>
      </div>
    </nav>
  );
};

export default Navigation;
