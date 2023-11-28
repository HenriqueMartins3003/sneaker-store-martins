import { GetItemsInterface } from "@/app/interfaces/Items.Interface";
import Image from "next/image";

import React from "react";

const Item = ({
  principalImage,
  leftImage,
  rightImage,
  description,
  id,
  price,
  title,
}: GetItemsInterface) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex mb-2 mx-auto">
        <Image
          src={rightImage}
          alt="Imagem sneaker Space Jam"
          width={300}
          height={300}
          className="overflow-hidden mx-1"
        />
        <Image
          src={principalImage}
          alt="Imagem sneaker Space Jam"
          width={300}
          height={300}
          className="overflow-hidden mr-1"
        />
        <Image
          src={leftImage}
          alt="Imagem sneaker Space Jam"
          width={300}
          height={300}
          className="overflow-hidden mr-1"
        />
      </div>
      <h4>{title}</h4>
      <p>{price}</p>
      <p className="text-sm text-neutral-950">{description}</p>
    </div>
  );
};

export default Item;
