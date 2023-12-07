"use client";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../../components/ItemDetail/ItemDetail";

import TopRImg from "../../../../public/JDGreen-Right.webp";
import TopLImg from "../../../../public/JDGreen-top.png";
import BottonLImg from "../../../../public/JDGreen-sola.png";
import BottonRImg from "../../../../public/JDGreen-Left.png";
import ImgBack from "../../../../public/JDGreen-Back.png";

import YeezyImg from "../../../../public/Yeezy-PrincipalImage.webp";
import YeezyBack from "../../../../public/Yeezy-RightImage.webp";
import YeezySola from "../../../../public/Yeezy-SolaImage.webp";
import YeezyTop from "../../../../public/yeezy-TopImage.webp";

import SpaceJam from "../../../../public/Sneaker_spaceJam3.png";
import SpaceJamTop from "../../../../public/sneaker-1.png";
import SpaceJamR from "../../../../public/sneaker_spaceJam2.png";
import SpaceJamL from "../../../../public/sneaker_spaceJam2.png";

import ItemsDetailInterface from "@/interfaces/ItemsDetail.interface";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const [items, SetItems] = useState<ItemsDetailInterface | null>(null);

  const getItems = (): Promise<ItemsDetailInterface[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
            price: "990,00",
            title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
            color: "Branco e Azul Bebê",
            avaliability: new Date().getUTCFullYear(),
            bottonLeftImage: SpaceJam,
            bottonRightImage: SpaceJamL,
            toplLeftImage: SpaceJamR,
            topRightImage: SpaceJamTop,
            backImg: SpaceJam,
          },
          {
            id: 2,
            description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
            price: "990,00",
            title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
            color: "Branco e Azul Bebê",
            avaliability: new Date().getUTCFullYear(),
            bottonLeftImage: SpaceJam,
            bottonRightImage: SpaceJamL,
            toplLeftImage: SpaceJamR,
            topRightImage: SpaceJamTop,
            backImg: SpaceJam,
          },
        ]);
      }, 500);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const resp = await getItems();
        const productId = resp.find(
          (produto) => produto.id === Number(params.id)
        );

        productId ? SetItems(productId) : SetItems(null);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, [params.id]);

  return (
    <>
      <section>
        <ItemDetail
          id={items?.id}
          avaliability={items?.avaliability}
          backImg={items?.backImg}
          bottonLeftImage={items?.bottonLeftImage}
          bottonRightImage={items?.bottonRightImage}
          color={items?.color}
          description={items?.description}
          price={items?.price}
          title={items?.title}
          topRightImage={items?.topRightImage}
          toplLeftImage={items?.toplLeftImage}
        />
      </section>
    </>
  );
};

export default ItemDetailContainer;
