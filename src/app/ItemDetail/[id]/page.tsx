"use client";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import GetItemsInterface from "@/app/interfaces/Items.Interface";
import { useParams } from "next/navigation";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { APP_FIREBASE } from "@/Config/firebase/firebase.config";
import { ToastContainer } from "react-toastify";
import useFireBaseHook from "@/Hooks/fireBaseHook";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const routeParams = useParams();
  const idNumber = Number(routeParams.id);

  const [items, SetItems] = useState<GetItemsInterface | null>(null);

  useEffect(() => {
    const onMount = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const listaSneaker = await useFireBaseHook();

        const productId = listaSneaker.find(
          (produto) => produto.id === idNumber
        );

        productId ? SetItems(productId) : SetItems(null);
        localStorage.setItem("StockDisponivel", items!.stock!.toString());
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, [idNumber, items]);

  return (
    <>
      <section>
        <ToastContainer />
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
