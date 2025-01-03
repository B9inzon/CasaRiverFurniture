"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <LuMenu
        size={32}
        color="#19120c"
        strokeWidth={2}
        className="lg:hidden"
        onClick={switchMenu}
      />
      <div
        className={`fixed top-0 right-0 min-h-screen w-full bg-gradient-to-b from-[#332f11] to-[#191708] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <CgClose
            size={30}
            color="#e5a773"
            strokeWidth={2}
            onClick={switchMenu}
          />
        </div>
        <ul className=" flex h-full flex-col font-medium items-center space-y-6 text-xl mt-10 text-[#e5a773] transition ">
          <li>
            <Link href="#Main" onClick={switchMenu}>Inicio</Link>
          </li>
          <li>
            <Link href="#Salas" onClick={switchMenu}>Salas</Link>
          </li>
          <li>
            <Link href="/" onClick={switchMenu}>Acerca de nosotros</Link>
          </li>
          <li>
            <Link href="/" onClick={switchMenu}>Contáctanos</Link>
          </li>
        </ul>
      </div>
      {/* {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-black opacity-80 lg:hidden z-40"
          onClick={switchMenu}
        ></div>
      )} */}
    </div>
  );
};

export default BurguerMenu;
