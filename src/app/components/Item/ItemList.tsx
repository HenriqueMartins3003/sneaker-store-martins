import React, { useEffect, useState } from "react";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { getItems } from "@/app/services/mockApi.service";

import Item from "./Item";

const ItemList = () => {
  const [items, SetItems] = useState<GetItemsInterface[]>([]);

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
