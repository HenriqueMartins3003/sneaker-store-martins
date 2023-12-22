"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

import { useCart } from "@/contexto/cartContext";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import ItemCounter from "../itemCounter/itemCounter";

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
  const { addItem, isInCart, itemsCart } = useCart();

  const date = avaliability?.toDate();
  const formatedDate = date?.toLocaleDateString("pt-BR");
  console.log("Quantidade vindo do firebase!!!", quantity);
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
            <span className="text-base">{`Disponivel a partir de: ${formatedDate}`}</span>
            <span className="text-base">{`$ ${price}`}</span>
            <span className="text-base">
              {stock! > 0
                ? `Estoque disponivel: ${stock!}`
                : `Estoque indisponivel`}
            </span>
          </div>
          <ItemCounter stockFirebase={stock!} quantity={quantity!} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
