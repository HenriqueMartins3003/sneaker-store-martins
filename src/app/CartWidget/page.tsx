"use client";
import React from "react";
import { useCart } from "@/contexto/cartContext";
import Image from "next/image";

const CartWidget = () => {
  const { itemsCart } = useCart();
  return (
    <>
      <div className="container w-full mx-2 my-2">
        {itemsCart.map((item) => (
          <div className="w-full h-20 flex" key={item.id}>
            <Image src={item.bottonRightImage!} alt="" width={70} height={70} />

            <p className="text-black">
              <strong>{item.description}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartWidget;
