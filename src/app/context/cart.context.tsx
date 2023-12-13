"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import Icart from "../interfaces/Cart.Interface";

interface IcartMethods extends Icart {
  addItem: (item: Icart) => void;
  removeItem: (itemId: number) => void;
  clear: () => void;
  isInCart: (id: number) => boolean;
}

const cartContextDefault: Icart[] = [];

const CartContext = createContext<{
  itemsCart: Icart[];
  addItem: (item: Icart) => void;
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
  const [itemsCart, setItemsCart] = useState<Icart[]>([]);

  const addItem = (item: Icart) => {
    setItemsCart((prevItems) => {
      // Implemente a lógica de adição do item ao carrinho
      return [...prevItems, { ...item }];
    });
  };

  const removeItem = (itemId: number) => {
    setItemsCart((prevItems) => {
      // Implemente a lógica de remoção do item do carrinho
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const clear = () => {
    setItemsCart([]);
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
