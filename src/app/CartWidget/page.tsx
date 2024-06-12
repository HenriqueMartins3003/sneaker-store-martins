"use client";
import Image from "next/image";
import { useEffect, useState,useContext } from "react";
import {createTicket} from "@/Hooks/backend.api"
import { useCart } from "@/contexto/cartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import {AuthContext } from "../contexts/AuthContext";


const CartWidget = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { itemsCart, removeItem, clear } = useCart();
  const { user } = useContext(AuthContext)
  const routes = useRouter();
  
  useEffect(() => {
    let calculatedPrice = 0;
    itemsCart.forEach((item) => {
      calculatedPrice += item.quantity! * item.price!;
    });

    setTotalPrice(calculatedPrice);
    console.log("preco total dos items!!", calculatedPrice);
  }, [itemsCart]);

  return (
    <>
      <div className="container mx-auto my-4 flex flex-col">
        {itemsCart.length > 0 ? (
          itemsCart.map((item) => (
            <div
              className="flex justify-between items-center  mb-4 p-4 bg-gray-200 rounded-md border border-gray-700"
              key={item._id}
            >
              <div className="w-24">
                <Image
                  src={item.thumbmail!}
                  alt={item.title!}
                  width={300}
                  height={300}
                  className="w-24"
                />
              </div>
              <div className="flex space-x-3">
                <p className="text-black">
                  <strong>{item.title}</strong>
                </p>
              </div>

              <p className="text-black">Quantidade: {item.quantity}</p>
              <p>Preço total: {item.quantity! * item.price!}</p>

              <button className="" onClick={() => removeItem(item._id!)}>
                <TrashIcon className="h-9 my-auto" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-black text-3xl">Carrinho Vazio! </p>
            <button
              className="border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2 mt-3"
              onClick={() => routes.push("/")}
            >
              Home page
            </button>
          </div>
        )}

        <div className="flex justify-between items-center  mb-4 p-4 bg-gray-200 rounded-md border border-gray-700">
          <p>
            {" "}
            Valor total do carrinho:{" "}
            <strong className="pl-1"> ${totalPrice},00</strong>{" "}
          </p>
          <button
            className="border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2"
            onClick={() => {
              // logica para alterar o firesabe
                //createTicket({  })
              //limpando o carrinho!
              clear();
              //Indo para a pagina de finalização(integraçao com pagina de pagamentos);
              routes.push("/cartFinished");
            }}
          >
            Finalizar Compra!
          </button>
          <button
            className="border-2 bg-sky-700 text-sm text-white rounded-full px-2 py-2"
            onClick={() => {
              clear();
              routes.refresh();
            }}
          >
            Limpar carrinho!
          </button>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
