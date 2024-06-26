"use client";
import Image from "next/image";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { MinusSmallIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexto/cartContext";
import { AuthContext } from "@/app/contexts/AuthContext";
import { createCart } from "@/Hooks/backend.api";

const ItemDetail = ({
  _id,
  description,
  thumbmail,
  price,
  title,
  stock,
  quantity,
}: GetItemsInterface) => {
  const [stockState, setStockState] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [isEnable, setIsEnable] = useState<boolean>(false);
  const routes = useRouter();
  const { addItem } = useCart();
  let id = localStorage.getItem("ID_USER")

  useEffect(() => {
    setCounter(quantity!);
    setStockState(stock!);
  }, [stock, quantity]);

  const handleAdd = () => {
    if (counter < stock!) {
      setCounter((prevConter) => prevConter + 1);
      setStockState((prevStock) => prevStock - 1);
    } else {
      setIsEnable(true);
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
      setStockState((prevStock) => prevStock + 1);
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setIsEnable(true);
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
    if (counter === 0) {
      setIsEnable(true);
      toast.warn(`Quantidade de items deve ser maior que zero!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
      });
      return;
    }
    const iCart = {
      _id,
      description,
      price,
      title,
      stock,
      quantity: counter,
      thumbmail,
    };
    addItem(iCart);
    console.log(id)
    
    if(id === null){
      id = "";
    }
    const cart = createCart(iCart, id);

    if (cart === null) {
      toast.error("Erro ao Salvar", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
      });
    }

    toast.success(`${title} adicionado ao carrinho com sucesso`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });

    routes.push("/CartWidget");
  };

  return (
    <>
      <div className="flex mt-3 w-screen">
        <div className="ml-5 mt-2 w-[5500px] grid grid-cols-2">
          <div className="bg-slate-300 opacity-60 mr-2 items-center justify-center">
            <Image
              src={thumbmail!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto my-auto items-center"
            ></Image>
          </div>
          <div className="bg-slate-300 opacity-60">
            <Image
              src={thumbmail!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto my-auto items-center"
            ></Image>
          </div>
          <div className="mt-2 mr-2 bg-slate-300 opacity-60">
            <Image
              src={thumbmail!}
              alt={title!}
              height={350}
              width={350}
              className="pt-20 mx-auto"
            ></Image>
          </div>
          <div className="mt-2 bg-slate-300 opacity-60">
            <Image
              src={thumbmail!}
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
          </div>
          <span className="text-base">{description}</span>
          <div className="flex flex-col mt-3 gap-3">
            <span className="text-base">{`SKU: ${_id}`}</span>

            <span className="text-base">{`$ ${price}`}</span>
            <span className="text-base">
              {stockState! > 0
                ? `Estoque Dispinovivel: ${stockState!}`
                : `Estoque indisponivel`}
            </span>
          </div>

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
          {/* <ItemCounter stockFirebase={stockState!} quantity={quantity!} /> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ItemDetail;
