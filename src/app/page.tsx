"use client";
import ItemList from "@/app/components/Item/ItemList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/cart.context";

export default function Home() {
  return (
    <>
      <CartProvider>
        <ItemList />
      </CartProvider>
    </>
  );
}
