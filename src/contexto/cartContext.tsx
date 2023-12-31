"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import GetItemsInterface from "@/app/interfaces/Items.Interface";

interface Icart extends GetItemsInterface {
  item: GetItemsInterface[];
  addItem: (item: GetItemsInterface) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}

const cartContextDefault: GetItemsInterface[] = [];

const CartContext = createContext<{
  itemsCart: GetItemsInterface[];
  addItem: (item: GetItemsInterface) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}>({
  itemsCart: cartContextDefault,
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  isInCart: () => false,
});

interface IProvider {
  children: React.ReactNode;
}

const CartProvider = ({ children }: IProvider) => {
  const [itemsCart, setItemsCart] = useState<GetItemsInterface[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  const addItem = (item: GetItemsInterface) => {
    if (item.stock === 0) {
      return;
    }

    setItemsCart((prevItems) => {
      setTotalItems((prev) => prev + 1);
      return [...prevItems, { ...item }];
    });
  };
  const removeItem = (itemId: number) => {
    setItemsCart((prevItems) => {
      setTotalItems((prev) => prev - 1);

      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const clear = () => {
    setItemsCart([]);
    setTotalItems(0);
  };

  const isInCart = (itemId: number) => {
    // Implemente a lógica para verificar se o item está no carrinho
    return itemsCart.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ itemsCart, addItem, removeItem, isInCart, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
