import Image from "next/image";
import React from "react";

const MainHome = () => {
  return( 
  <section
  id="Main"
  className="flex min-h-screen w-full items-center justify-center py-40">
    <Image
     src="/images/furniture/sofa-cuero.jpg"
     fill={true}
     className="object-cover object-cente z-10"
     alt=""
    />
    <div className=" absolute inset-0 bg-gradient-to-t from-[#19120c] z-20"></div>
    <h1 className="text-9xl text-[#ffba80] z-30">Salas</h1>
  </section>
)};

export default MainHome;
