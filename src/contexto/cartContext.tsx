"use client";
import { createContext, useContext, useState } from "react";
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
  removeItem: (itemId: string) => void;
  clear: () => void;
  isInCart: (id: string) => boolean;
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
  const removeItem = (itemId: string) => {
    setItemsCart((prevItems) => {
      setTotalItems((prev) => prev - 1);

      return prevItems.filter((item) => item._id !== item._id);
    });
  };

  const clear = () => {
    setItemsCart([]);
    setTotalItems(0);
  };

  const isInCart = (itemId: string) => {
    // Implemente a lógica para verificar se o item está no carrinho
    return itemsCart.some((item) => item._id === itemId);
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
