import React, { useEffect, useState } from "react";
import ItemConter from "../itemConter/ItemConter";
import Item from "./Item";
import { GetItemsInterface } from "@/app/interfaces/Items.Interface";
import rightImage from "../../../../public/Sneaker_spaceJam3.webp";
import lefttImage from "../../../../public/sneaker_spaceJam2.webp";
import principalImage from "../../../../public/sneaker-1.webp";

const ItemList = () => {
  const [initial, setInitial] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);
  const [items, SetItems] = useState<GetItemsInterface[]>([]);

  const onAdd = () => {
    const newStock = stock - initial;
    setStock(newStock);

    console.log(`Novo Stock = ${newStock}, Estado stock = ${stock}`);
  };

  const getItems = (): Promise<GetItemsInterface[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: `Tênis Nike Air Force 1 07 x Space Jam Masculino Clássico e atemporal, o
            tênis Nike Air Force 1 07 é um modelo que nunca sai de moda! Construído
            com silhueta de cano baixo, o tênis apresenta um visual clean e
            versátil, com cabedal todo feito de couro. Os detalhes incluem Swooshes
            laterais e a assinatura Nike Air estampada nas etiquetas das línguas e
            na região dos calcanhares. Perfeito para compor qualquer outfit! `,
            price: 1450,
            title: `Nike Air Space Jam`,
            leftImage: lefttImage,
            rightImage: rightImage,
            principalImage: principalImage,
          },
          {
            id: 2,
            description: `Tênis Nike Air Force 1 07 x Space Jam Masculino Clássico e atemporal, o
            tênis Nike Air Force 1 07 é um modelo que nunca sai de moda! Construído
            com silhueta de cano baixo, o tênis apresenta um visual clean e
            versátil, com cabedal todo feito de couro. Os detalhes incluem Swooshes
            laterais e a assinatura Nike Air estampada nas etiquetas das línguas e
            na região dos calcanhares. Perfeito para compor qualquer outfit! `,
            price: 1450,
            title: `Nike Air Space Jam`,
            leftImage: lefttImage,
            rightImage: rightImage,
            principalImage: principalImage,
          },
        ]);
      }, 5000);
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
      <div className="mx-20 rounded-md bg-zinc-300 border-2 border-sky-400 border-opacity-5 flex flex-col mt-3 items-center justify-center">
        <div>
          {items.map((item) => (
            <div className="my-2" key={item.id}>
              <Item
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                rightImage={item.rightImage}
                leftImage={item.leftImage}
                principalImage={item.principalImage}
              />
              <ItemConter initial={initial} stock={stock} onAdd={() => onAdd} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
