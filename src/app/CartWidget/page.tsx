"use client";
import React from "react";
import { useCart } from "@/contexto/cartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CartWidget = () => {
  const { itemsCart, removeItem } = useCart();

  console.log("Tamanho carrinho", itemsCart.length);

  return (
    <>
      <div className="container mx-auto my-4 flex flex-col">
        {itemsCart.length >= 0 ? (
          itemsCart.map((item) => (
            <div
              className="flex items-center  mb-4 p-4 bg-gray-200 rounded-md border border-gray-700 space-x-10"
              key={item.id}
            >
              <div className="w-24 mr-4">
                <Image
                  src={item.bottonRightImage!}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full rounded-md"
                />
              </div>

              <p className="text-black">
                <strong>{item.title}</strong>
              </p>

              <p>Preço total: {item.quantity! * item.price!}</p>

              <button className="" onClick={() => removeItem(item.id!)}>
                <TrashIcon className="h-9 my-auto" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-black">Carrinho Vazio!</p>
        )}
      </div>
    </>
  );
};

export default CartWidget;
