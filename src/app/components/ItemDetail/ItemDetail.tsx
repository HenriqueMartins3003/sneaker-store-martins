import Image from "next/image";
import React from "react";
import ItemsDetaileInterface from "@/interfaces/ItemsDetail.interface";
import ItemConter from "@/components/itemCounter/ItemConter";

const ItemDetail = ({
  id,
  avaliability,
  backImg,
  bottonLeftImage,
  bottonRightImage,
  color,
  description,
  price,
  title,
  topRightImage,
  toplLeftImage,
}: ItemsDetaileInterface) => {
  return (
    <div className="flex mt-3 w-screen">
      <div className="ml-5 mt-2 w-[7000px] grid grid-cols-2">
        <div className="mt-2 mr-2 bg-slate-300 opacity-60">
          <Image
            src={backImg!}
            alt={title!}
            height={350}
            width={350}
            className="pt-20"
          ></Image>
        </div>
        <div className="mt-2 bg-slate-300 opacity-60">
          <Image
            src={toplLeftImage!}
            alt={title!}
            height={350}
            width={350}
            className="pt-20"
          ></Image>
        </div>
        <div className="mt-2 mr-2 bg-slate-300 opacity-60">
          <Image
            src={bottonLeftImage!}
            alt={title!}
            height={350}
            width={350}
            className="pt-20"
          ></Image>
        </div>
        <div className="mt-2 bg-slate-300 opacity-60">
          <Image
            src={bottonRightImage!}
            alt={title!}
            height={350}
            width={350}
            className="pt-20"
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
        </div>
        <ItemConter initial={0} stock={10} onAdd={() => {}} />
      </div>
    </div>
  );
};

export default ItemDetail;
