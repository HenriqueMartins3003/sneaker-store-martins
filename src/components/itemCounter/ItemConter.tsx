import React, { useState } from "react";
import { toast } from "react-toastify";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  stock: number;
  initial: number;
  onAdd: () => void;
}
const ItemConter = ({ initial, stock, onAdd }: Props) => {
  const [counter, setCounter] = useState<number>(initial);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter((prevConter) => (prevConter = prevConter + 1));
    } else {
      setIsDisable(true);
      console.log(isDisable);
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
    if (counter > 0) {
      setCounter((prevConter) => (prevConter = prevConter - 1));
      setIsDisable(false);
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

  return (
    <div className="flex flex-col items-center mt-2">
      <span className="">Quantidade: </span>
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
          onClick={() => {
            console.log("mklsmvklemfv");
          }}
          disabled={isDisable}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ItemConter;
