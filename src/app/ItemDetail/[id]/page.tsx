"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import {getProductsById} from "@/Hooks/backend.api"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import GetItemsInterface from "@/app/interfaces/Items.Interface";

interface Props {
  params: {
    id: number;
  };
}
const ItemDetailContainer = ({ params }: Props) => {
  const routeParams = useParams();
  const idNumber = routeParams.id.toString();

  const [items, SetItems] = useState<GetItemsInterface | null>(null);

  useEffect(() => {
    const onMount = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const product = await getProductsById(idNumber);
        
       product ? SetItems(product) : SetItems(null);
        localStorage.setItem("StockDisponivel", items!.stock!.toString());
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    onMount();
  }, [idNumber]);

  return (
    <>
      <section>
        <ToastContainer />
        <ItemDetail
          _id={items?._id}           
          description={items?.description}
          price={items?.price}
          title={items?.title}
          stock={items?.stock}
          quantity={0}
          thumbmail={items?.thumbmail!}
        />
      </section>
    </>
  );
};

export default ItemDetailContainer;
