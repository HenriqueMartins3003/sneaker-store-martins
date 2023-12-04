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

import SpaceJam from "../../../../public/Sneaker_spaceJam3.webp";
import SpaceJamTop from "../../../../public/sneaker-1.webp";
import SpaceJamR from "../../../../public/sneaker_spaceJam2.webp";
import SpaceJamL from "../../../../public/sneaker_spaceJam2.webp";

import ItemsDetailInterface from "@/interfaces/ItemsDetail.interface";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const [items, SetItems] = useState<ItemsDetailInterface>();

  const getItems = (): Promise<ItemsDetailInterface> => {
    return new Promise((resolve, reject) => {
      if (params.id == 1) {
        setTimeout(() => {
          resolve({
            id: params.id,
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
          });
        }, 500);
      } else if (params.id == 2) {
        setTimeout(() => {
          resolve({
            id: params.id,
            description: `Apaixone-se pelo Olive. Esta edição do clássico de 1989 apresenta camurça, couro e tecidos em elegantes tons terrosos. Os painéis laterais inspirados em malha são gravados em relevo para uma abordagem tátil do original. E todos os outros elementos icónicos do AJ4 também 
            estão presentes, como os ilhoses flutuantes, o guarda-lamas ondulado e a marca Jumpman.`,
            price: "1459.90",
            title: `Air Jordan 4 Retro Craft`,
            color: "Medium Olive",
            avaliability: new Date().getUTCFullYear(),
            bottonLeftImage: YeezyBack,
            bottonRightImage: YeezyImg,
            toplLeftImage: YeezySola,
            topRightImage: YeezyTop,
            backImg: YeezyImg,
          });
        }, 500);
      } else if (params.id == 3) {
        setTimeout(() => {
          resolve({
            id: params.id,
            description: `Construído em cano baixo, o Yeezy Boost 350 V2 “Slate” apresenta colorway clean e discreta em bege claro e a clássica tarja preta nas laterais. Seu cabedal feito de tecido torna o modelo semelhante a uma meia com gola mais alta no tornozelo.
            Sua tecnologia Boost garante conforto inigualável, com amortecimento macio e duradouro.`,
            price: "1890,00",
            title: `ADIDAS YEEZY BOOST 350 V2`,
            color: "Slate",
            avaliability: new Date().getUTCFullYear(),
            bottonLeftImage: YeezyImg,
            bottonRightImage: YeezyTop,
            toplLeftImage: YeezyBack,
            topRightImage: YeezySola,
            backImg: YeezyImg,
          });
        }, 500);
      } else {
        setTimeout(() => {
          resolve({
            id: params.id,
            description: `Apaixone-se pelo Olive. Esta edição do clássico de 1989 apresenta camurça, couro e tecidos em elegantes tons terrosos. Os painéis laterais inspirados em malha são gravados em relevo para uma abordagem tátil do original. E todos os outros elementos icónicos do AJ4 também 
            estão presentes, como os ilhoses flutuantes, o guarda-lamas ondulado e a marca Jumpman.`,
            price: "1459.90",
            title: `Air Jordan 4 Retro Craft`,
            color: "Medium Olive",
            avaliability: new Date().getUTCFullYear(),
            bottonLeftImage: BottonLImg,
            bottonRightImage: BottonRImg,
            toplLeftImage: TopLImg,
            topRightImage: TopRImg,
            backImg: ImgBack,
          });
        }, 500);
      }
    });
  };

  useEffect(() => {
    const onMount = async () => {
      try {
        const resp = await getItems();
        SetItems(resp);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, []);

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
