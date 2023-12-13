"use client";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getItemsDetail } from "@/app/services/mockApi.service";
import ItemsDetailInterface from "@/app/interfaces/ItemsDetail.interface";
import { useCart } from "@/app/context/cart.context";
import { toast, ToastContainer } from "react-toastify";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const [items, SetItems] = useState<ItemsDetailInterface | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const onMount = async () => {
      try {
        const resp = await getItemsDetail();

        const productId = resp.find(
          (produto) => produto.id === Number(params.id)
        );

        productId ? SetItems(productId) : SetItems(null);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, [params.id]);

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
          description={items?.description}
          price={items?.price}
          title={items?.title}
          topRightImage={items?.topRightImage}
          toplLeftImage={items?.toplLeftImage}
          stock={items?.stock}
        />
      </section>
    </>
  );
};

export default ItemDetailContainer;
