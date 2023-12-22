"use client";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getItems } from "@/app/services/mockApi.service";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { useParams } from "next/navigation";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { APP_FIREBASE } from "@/Config/firebase/firebase.config";
import { trace } from "console";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const routeParams = useParams();
  const idNumber = Number(routeParams.id);

  const [items, SetItems] = useState<GetItemsInterface | null>(null);
  //const { addItem } = useCart();

  useEffect(() => {
    const onMount = async () => {
      try {
        const db = getFirestore(APP_FIREBASE);
        const prodRef = collection(db, "Sneaker");
        const listaSneaker = await getDocs(prodRef).then((item) => {
          const lista = item.docs.map((doc) => doc.data());
          return lista;
        });
        //console.log(listaSneaker);
        //Mock do objeto do FireBase
        //const resp = await getItems();
        const productId = listaSneaker.find(
          (produto) => produto.id === idNumber
        );

        productId ? SetItems(productId) : SetItems(null);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, [idNumber]);

  return (
    <>
      <section>
        <ItemDetail
          id={items?.id}
          avaliability={items?.avaliability}
          bottonLeftImage={items?.bottonLeftImage}
          bottonRightImage={items?.bottonRightImage}
          color={items?.color}
          description={items?.description}
          price={items?.price}
          title={items?.title}
          topRightImage={items?.topRightImage}
          toplLeftImage={items?.toplLeftImage}
          stock={items?.stock}
          quantity={items?.quantity}
        />
      </section>
    </>
  );
};

export default ItemDetailContainer;
