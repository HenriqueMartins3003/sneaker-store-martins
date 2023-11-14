import Image from "next/image";
import LocalImage from "../../../../public/LogoSneaker.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <nav className="bg-sky-700 h-20 flex justify-between align-middle">
        <div className="h-[78] w-[78]">
          <Image
            width={75}
            height={75}
            src={LocalImage}
            alt="Logo Sneker Store"
            className="ml-2 pt-0.5"
          />
        </div>
        <p className="text-2xl my-auto font-body text-slate-200">
          Sneaker Store
        </p>
        <div className="h-9 my-auto mr-10 fo">
          <ShoppingCartIcon className="h-9 my-auto" />
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
