import React, { useEffect, useState } from "react";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import Item from "./Item";
import { getAllProducts, getProductsById } from "@/Hooks/backend.api";

const ItemList = () => {
  const [items, SetItems] = useState<GetItemsInterface[]>([]);

  useEffect(() => {
    const onMount = async () => {
      try {
        //Custom hook para usar o Firebase!
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const listaSneaker = await useFireBaseHook();
        //SetItems(listaSneaker);

        const list = await getProductsById("65fc40c0db81e753d86faff1");
        console.log(list);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, []);
  console.log();
  return (
    <>
      <div className="grid grid-cols-2 mx-20 my-3 rounded-md border-2 border-sky-500 items-center justify-center">
        {items.map((item) => (
          <div className="my-2" key={item.id}>
            <Item
              id={item.id}
              price={item.price}
              title={item.title}
              description={item.description}
              toplLeftImage={item.topRightImage}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
