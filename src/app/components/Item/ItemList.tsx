import React, { useEffect, useState } from "react";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { APP_FIREBASE } from "@/Config/firebase/firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  getFirestore,
  doc,
} from "firebase/firestore";
import Item from "./Item";
import useFireBaseHook from "@/Hooks/fireBaseHook";

const ItemList = () => {
  const [items, SetItems] = useState<GetItemsInterface[]>([]);

  // const db = getFirestore(APP_FIREBASE);

  //Pegar apenas um objeto do Firebase
  // const productRef = doc(db, "Sneaker", "BevNCG3cMrbMFxuXSPEH");
  // getDoc(productRef).then((item) => {
  //   if (item.exists()) {
  //     console.log(item.data());
  //   }
  // });

  //  const prodRef = collection(db, "Sneaker");

  // const listaSneaker = getDocs(prodRef).then((item) => {
  //   const lista = item.docs.map((doc) => doc.data());
  //   return lista;
  // });

  useEffect(() => {
    const onMount = async () => {
      try {
        //Custom hook para usar o Firebase!
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const listaSneaker = await useFireBaseHook();

        SetItems(listaSneaker);
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
