import { ItemsDetailInterface } from "@/app/interfaces/ItemsDetail.interface";
import Image from "next/image";

import React from "react";

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
}: ItemsDetailInterface) => {
  return (
    <div className="flex">
      <div className="">
        <Image src={backImg!} alt=" " height={50} width={50}></Image>
      </div>
      <div className="flex flex-col">
        <h2>asjdkl;jdfkjsdlkfj</h2>
        <p>kldkf;lkgkel;ldsglf;</p>
        <p>kaslkdl;skfopef</p>
      </div>
    </div>
  );
};

export default ItemDetail;
