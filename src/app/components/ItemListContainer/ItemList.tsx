import React, { useEffect, useState } from "react";
import ItemConter from "../itemConter/ItemConter";
import Item from "../Item/Item";

const ItemList = () => {
  const [initial, setInitial] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);
  const [imgURL, setImgURL] = useState<string>("");

  const onAdd = () => {
    const newStock = stock - initial;
    setStock(newStock);

    console.log(`Novo Stock = ${newStock}, Estado stock = ${stock}`);
  };

  const getImgUrl = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setImgURL("../../../../public/sneaker-1.webp"));
        console.log(imgURL);
      }, 2000);
    });
  };

  useEffect(() => {
    const onMount = async () => {
      await getImgUrl();
    };
  }, []);

  return (
    <div className="mx-20 rounded-md bg-zinc-300 border-2 border-sky-400 border-opacity-5 flex flex-col mt-3 items-center justify-center">
      <div className="my-2">
        <Item imageURL={imgURL} rightImage={imgURL} leftImage={imgURL} />
        <ItemConter initial={initial} stock={stock} onAdd={onAdd} />
      </div>
      <div className="my-2">
        <Item imageURL={imgURL} rightImage="" leftImage="" />
        <ItemConter initial={10} stock={50} onAdd={onAdd} />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 3 </p>
        <ItemConter initial={0} stock={2} onAdd={onAdd} />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 4 </p>
        <ItemConter initial={1} stock={5} onAdd={onAdd} />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 5 </p>
        <ItemConter initial={0} stock={9} onAdd={onAdd} />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 6 </p>
        <ItemConter initial={0} stock={3} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemList;
