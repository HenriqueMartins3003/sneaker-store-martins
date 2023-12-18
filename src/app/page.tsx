"use client";
import ItemList from "@/app/components/Item/ItemList";

import "react-toastify/dist/ReactToastify.css";
//import { CartProvider } from "./context/cart.context";

export default function Home() {
  return (
    <>
      <ItemList />
    </>
  );
}
