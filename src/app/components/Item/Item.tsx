import React, { useState } from "react";
import Image from "next/image";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { useRouter } from "next/navigation";

const Item = ({ toplLeftImage, id, price, title }: GetItemsInterface) => {
  const routes = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex mb-2 mx-auto">
          <Image
            src={toplLeftImage!}
            alt={title!}
            width={300}
            height={300}
            className="overflow-hidden mr-1"
          />
        </div>
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <div className="flex justify-center items-center mt-1">
        <button
          className="mx-auto border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2"
          onClick={() => routes.push(`/ItemDetail/${id}`)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default Item;
