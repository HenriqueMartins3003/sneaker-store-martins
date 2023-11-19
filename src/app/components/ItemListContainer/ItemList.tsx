import React from "react";
import ItemConter from "../itemConter/ItemConter";

const ItemList = () => {
  return (
    <div className="mx-20 rounded-md bg-zinc-300 border-2 border-sky-400 border-opacity-5 flex flex-col mt-3 items-center justify-center">
      <div className="my-2">
        <p className="mb-2">Item 1 </p>
        <ItemConter />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 2 </p>
        <ItemConter />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 3 </p>
        <ItemConter />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 4 </p>
        <ItemConter />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 5 </p>
        <ItemConter />
      </div>
      <div className="my-2">
        <p className="mb-2">Item 6 </p>
        <ItemConter />
      </div>
    </div>
  );
};

export default ItemList;
