import { GetItemsInterface } from "@/app/interfaces/Items.Interface";
import Image from "next/image";

import React, { useState } from "react";
import ItemConter from "../itemConter/ItemConter";

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

    console.log(`Novo Stock = ${newStock}, Estado stock = ${stock}`);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center border-3 border-sky-700">
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
      <ItemConter initial={initial} stock={stock} onAdd={() => onAdd} />
    </div>
  );
};

export default Item;
