import React, { useState } from "react";
import { toast } from "react-toastify";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

import { useCart } from "@/app/context/cart.context";

interface Props {
  stock?: number;
  initial: number;
  onAdd: () => void;
}

const ItemConter = ({ initial, stock, onAdd }: Props) => {
  const [counter, setCounter] = useState<number>(initial);
  const [isDisable, setIsDisable] = useState<boolean>(false);
};

export default ItemConter;
