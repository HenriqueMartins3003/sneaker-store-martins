"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import LocalImage from "@/../public/LogoSneaker.png";
import { useCart } from "@/contexto/cartContext";
import { parseCookies,destroyCookie } from "nookies";

const NavBar = () => {
  
  const [login, setLogin] = useState<string>("");
    const routes = useRouter();
  const { itemsCart } = useCart();
  
  const getToken = ()=> {
    const nookie = parseCookies();
    
    const cookie = nookie['HAL-Token']
    console.log('HAL-TOKEN', cookie)
    return cookie;
  }

  useEffect(() => {
    const token = getToken();
    !token ? setLogin("Login") : setLogin("Logout")
  },[getToken()])

  return (
    <div className=" w-screen mx-auto">
      <nav className="bg-sky-700 h-20 flex justify-around align-middle">
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
              <a className="cursor-pointer" 
              onClick={() => {
                destroyCookie(null,"HAL-Token")
                routes.push("/")}}>
                {login}
              </a>
            </li>
            <li>
              <a className="cursor-pointer" 
              onClick={() => routes.push("/Item")}>
                Produtos
              </a>
            </li>
            <li>
              <a className="cursor-pointer" 
              onClick={() => routes.push("/ProductForm")}>
                Cadastro de produtos
              </a>
            </li>
          </ul>
        </div>
        <div className="h-9 my-auto mr-10">
          <a
            className="cursor-pointer"
            onClick={() => routes.push("./CartWidget")}
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
