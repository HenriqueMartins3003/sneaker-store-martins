import React, { useState } from "react";
import { toast } from "react-toastify";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

const ItemConter = () => {
  const [counter, setCounter] = useState<number>(0);
  const stock: number = 5;

  const handleAdd = () => {
    if (counter < stock) {
      setCounter((prevConter) => (prevConter = prevConter + 1));
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
    if (counter > 0) {
      setCounter((prevConter) => (prevConter = prevConter - 1));
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
    <div>
      <div className="flex justify-around border-2 border-sky-600  rounded-md w-24 py-1">
        <div className="h-6 my-auto">
          <button className="h-6" onClick={handleAdd}>
            <PlusSmallIcon className="h-6 my-auto" />
          </button>
        </div>
        <div>
          <p>{counter}</p>
        </div>
        <div className="h-6 my-auto">
          <button className="h-6" onClick={handleRemove}>
            <MinusSmallIcon className="h-6 my-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemConter;
