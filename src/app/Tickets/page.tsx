"use client";
import { useCart } from "../../contexto/cartContext";
import { useRouter } from "next/navigation";
import React from "react";

const CartFinished = () => {
  const { clear } = useCart();
  const routes = useRouter();
  return (
    <div className="flex flex-col ">
      <article className="flex justify-center mt-3">
        <span>Compra Finalizada com sucesso! </span>
      </article>

      <div className="flex justify-around mt-3">
        <button
          className="border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2"
          onClick={() => {
            clear();
            routes.push("/");
          }}
        >
          Home Page!
        </button>
      </div>
    </div>
  );
};

export default CartFinished;
