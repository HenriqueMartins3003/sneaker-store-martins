import React, { useState } from "react";
import Image from "next/image";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { useRouter } from "next/navigation";

const Item = ({ thumbmail, _id, price, title }: GetItemsInterface) => {
  const routes = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex mb-2 mx-auto my-auto w-[300px] h-[300px]">
          <Image
            src={thumbmail!}
            alt={title!}
            height={300}
            width={300}
            className="overflow-hidden mr-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4>{title}</h4>
          <p>$ {price}</p>
          <button
            className="mx-auto border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2 mt-2"
            onClick={() => routes.push(`/ItemDetail/${_id}`)}
          >
            Ver Detalhes
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-1"></div>
    </div>
  );
};

export default Item;
