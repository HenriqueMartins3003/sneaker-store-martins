import Image from "next/image";

import React from "react";

interface Props {
  imageURL: string;
  rightImage: string;
  leftImage: string;
}
const Item = ({ imageURL, leftImage, rightImage }: Props) => {
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
          src={imageURL}
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
      <p className="text-sm text-neutral-950">
        {" "}
        Tênis Nike Air Force 1 07 x Space Jam Masculino Clássico e atemporal, o
        tênis Nike Air Force 1 07 é um modelo que nunca sai de moda! Construído
        com silhueta de cano baixo, o tênis apresenta um visual clean e
        versátil, com cabedal todo feito de couro. Os detalhes incluem Swooshes
        laterais e a assinatura Nike Air estampada nas etiquetas das línguas e
        na região dos calcanhares. Perfeito para compor qualquer outfit!{" "}
      </p>
    </div>
  );
};

export default Item;
