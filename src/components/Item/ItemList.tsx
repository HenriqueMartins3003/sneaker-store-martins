import React, { useEffect, useState } from "react";
import Link from "next/link";

import Item from "./Item";

import principalImage from "../../../public/sneaker-1.webp";
import jordanImage from "../../../public/JDGreen-top.png";
import yeeziPrincipal from "../../../public/Yeezy-PrincipalImage.webp";

import GetItemsInterface from "@/interfaces/Items.Interface";

const ItemList = () => {
  const [items, SetItems] = useState<GetItemsInterface[]>([]);

  const getItems = (): Promise<GetItemsInterface[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: "",
            price: 1450,
            title: `Nike Air Space Jam`,
            principalImage: principalImage,
          },
          {
            id: 2,
            description: "",
            price: 1450,
            title: `Nike Jordan 4`,
            principalImage: jordanImage,
          },
          {
            id: 3,
            description: " ",
            price: 1450,
            title: `YEEZY BOOST 350 V2`,
            principalImage: yeeziPrincipal,
          },
          {
            id: 4,
            description: " ",
            price: 1450,
            title: `Nike Jordan 4`,
            principalImage: jordanImage,
          },
          {
            id: 5,
            description: " ",
            price: 1450,
            title: `Nike Jordan 4`,
            principalImage: principalImage,
          },
        ]);
      }, 1000);
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
      <div className="grid grid-cols-2 mx-20 rounded-md border-2 border-sky-400 border-opacity-5  mt-3 items-center justify-center">
        {items.map((item) => (
          <div className="my-2" key={item.id}>
            <Link href={`/ItemDetail/${item.id}`}>
              <Item
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                principalImage={item.principalImage}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
