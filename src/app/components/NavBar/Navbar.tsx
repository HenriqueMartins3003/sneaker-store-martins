"use client";
import Image from "next/image";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import LocalImage from "@/../public/LogoSneaker.png";
import { useCart } from "@/contexto/cartContext";

const NavBar = () => {
  const routes = useRouter();
  const { itemsCart } = useCart();

  return (
    <div className=" w-screen mx-auto">
      <nav className="bg-sky-700 h-20 flex justify-between align-middle">
        <div className="flex my-auto">
          <div className="h-[78] w-[78]">
            <Image
              width={75}
              height={75}
              src={LocalImage}
              alt="Logo Sneker Store"
              className="ml-2 pt-0.5 relative"
            />
          </div>
          <p className="text-2xl my-auto font-body text-slate-200">
            Sneaker Store
          </p>
        </div>
        <div className="text-white my-auto mx-auto">
          <ul className="flex gap-4 justify-around">
            <li>
              <a className="cursor-pointer" onClick={() => routes.push("/")}>
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="h-9 my-auto mr-10">
          <a
            className="cursor-pointer"
            onClick={() => routes.push("./cartWidget")}
          >
            <ShoppingCartIcon className="h-9 my-auto" />
            {itemsCart.length > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 ml-1">
                {itemsCart.length}
              </span>
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
