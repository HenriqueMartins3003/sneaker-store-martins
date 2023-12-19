"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexto/cartContext";
import GetItemsInterface from "@/app/interfaces/Items.Interface";

const ItemDetail = ({
  id,
  avaliability,
  bottonLeftImage,
  bottonRightImage,
  color,
  description,
  price,
  title,
  topRightImage,
  toplLeftImage,
  stock,
  quantity,
}: GetItemsInterface) => {
  const [counter, setCounter] = useState<number>(quantity!);
  const [stockState, setStockSate] = useState<number>(stock!);
  const { addItem, isInCart, itemsCart } = useCart();

  const routes = useRouter();

  useEffect(() => {
    setCounter(quantity!);
    setStockSate(stock!);
  }, [quantity, stock]);

  const handleAdd = () => {
    if (counter > stockState!) {
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
    if (stockState! > 0) {
      setStockSate((prevStock) => prevStock - 1);
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
    const iCart = {
      id,
      avaliability,
      bottonLeftImage,
      bottonRightImage,
      color,
      description,
      price,
      title,
      topRightImage,
      toplLeftImage,
      stock,
      quantity: counter,
    };

    addItem(iCart);

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

  return (
    <>
      <ToastContainer />
      <div className="flex mt-3 w-screen">
        <div className="ml-5 mt-2 w-[5500px] grid grid-cols-2">
          <div className="bg-slate-300 opacity-60 mr-2">
            <Image
              src={topRightImage!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto my-auto"
            ></Image>
          </div>
          <div className="bg-slate-300 opacity-60">
            <Image
              src={toplLeftImage!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto my-auto"
            ></Image>
          </div>
          <div className="mt-2 mr-2 bg-slate-300 opacity-60">
            <Image
              src={bottonLeftImage!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto"
            ></Image>
          </div>
          <div className="mt-2 bg-slate-300 opacity-60">
            <Image
              src={bottonRightImage!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col ml-3 mt-3 space-y-2 justify-around">
          <div className="">
            <h3 className="text-4xl">{title}</h3>
            <h2 className="text-2xl mt-2">{color} </h2>
          </div>
          <span className="text-base">{description}</span>
          <div className="flex flex-col mt-3 gap-3">
            <span className="text-base">{`SKU: ${id}`}</span>
            <span className="text-base">{`Disponivel a partir de: ${avaliability}`}</span>
            <span className="text-base">{`$ ${price}`}</span>
            <span className="text-base">
              {stock! > 0
                ? `Estoque disponivel: ${stockState}`
                : `Estoque indisponivel`}
            </span>
          </div>
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
                onClick={() => handleBuyClick()}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
