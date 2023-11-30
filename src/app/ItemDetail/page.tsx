"use client";
import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import TopRImg from "../../../public/JDGreen-Right.webp";
import TopLImg from "../../../public/JDGreen-top.png";
import BottonLImg from "../../../public/JDGreen-sola.png";
import BottonRImg from "../../../public/JDGreen-Left.png";
import ImgBack from "../../../public/JDGreen-Back.png";

import { ItemsDetailInterface } from "../interfaces/ItemsDetail.interface";

const ItemDetailContainer = () => {
  const [items, SetItems] = useState<ItemsDetailInterface>();

  const getItems = (): Promise<ItemsDetailInterface> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          description: `Apaixone-se pelo Olive. Esta edição do clássico de 1989 apresenta camurça, couro e tecidos em elegantes tons terrosos. Os painéis laterais inspirados em malha são gravados em relevo para uma abordagem tátil do original. E todos os outros elementos icónicos do AJ4 também estão presentes, como os ilhoses flutuantes, o guarda-lamas ondulado e a marca Jumpman.
            `,
          price: 1450,
          title: `Air Jordan 4 Retro Craft`,
          color: "Medium Olive",
          avaliability: Date.now().toString(),
          bottonLeftImage: BottonLImg,
          bottonRightImage: BottonRImg,
          toplLeftImage: TopLImg,
          topRightImage: TopRImg,
          backImg: ImgBack,
        });
      }, 3000);
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
          description={items?.color}
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
