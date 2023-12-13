import GetItemsInterface from "@/app/interfaces/Items.Interface";
import Image from "next/image";

import React, { useState } from "react";

import Link from "next/link";

const Item = ({
  principalImage,
  description,
  id,
  price,
  title,
}: GetItemsInterface) => {
  const [initial, setInitial] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);

  const onAdd = () => {
    const newStock = stock - initial;
    setStock(newStock);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex mb-2 mx-auto">
          <Image
            src={principalImage}
            alt="Imagem sneaker Space Jam"
            width={300}
            height={300}
            className="overflow-hidden mr-1"
          />
        </div>
        <h4>{title}</h4>
        <p>$ {price}</p>
        <p className="text-sm text-neutral-950">{description}</p>
      </div>
      <div className="flex justify-center items-center mt-1">
        <button className="mx-auto border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2">
          <Link href={`/ItemDetail/${id}`}> Ver Detalhes </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
