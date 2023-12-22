"use client";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { MinusSmallIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  stockFirebase: number;
  quantity: number;
}
const ItemCounter = ({ stockFirebase, quantity }: Props) => {
  const routes = useRouter();
  const [stock, setStock] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Quantidade: ", quantity);
    setCounter(quantity);
    setStock(stockFirebase);
  }, [stockFirebase, quantity]);

  const handleAdd = () => {
    if (counter <= stock) {
      setCounter((prevConter) => prevConter + 1);
    } else {
      toast.warn("Limite de itens atingido", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
      });
    }
  };

  const handleRemove = () => {
    if (stock! >= 1) {
      setStock((prevStock) => prevStock - 1);
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      toast.warn("Carrinho de compras já está vazio!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
      });
    }
  };

  const handleBuyClick = () => {
    // const iCart = {
    //   id,
    //   avaliability,
    //   bottonLeftImage,
    //   bottonRightImage,
    //   color,
    //   description,
    //   price,
    //   title,
    //   topRightImage,
    //   toplLeftImage,
    //   stock,
    //   quantity: counter,
    // };

    // addItem(iCart);

    toast.success(`${title} adicionado ao carrinho com sucesso`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });

    routes.push("/");
  };

  console.log(counter, stock);
  return (
    <div className="flex flex-col items-center mt-2">
      <span className="mb-1">Quantidade: </span>
      <div className="flex justify-around border-2 border-sky-600  rounded-md w-24 py-1 mt-1">
        <div className="h-6 my-auto">
          <button className="h-6" onClick={handleRemove}>
            <MinusSmallIcon className="h-6 my-auto" />
          </button>
        </div>
        <div>
          <p>{counter}</p>
        </div>
        <div className="h-6 my-auto">
          <button className="h-6" onClick={handleAdd}>
            <PlusSmallIcon className="h-6 my-auto" />
          </button>
        </div>
      </div>
      <div className="border-2 border-sky-600  rounded-md mt-1">
        <button
          className="h-6 py-2 px-1 hover:opacity-50"
          onClick={() => handleBuyClick()}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
