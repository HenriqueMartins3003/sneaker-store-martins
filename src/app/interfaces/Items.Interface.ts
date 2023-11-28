import { StaticImageData } from "next/image";

export interface GetItemsInterface {
  rightImage: StaticImageData;
  leftImage: StaticImageData;
  principalImage: StaticImageData;
  description: string;
  title: string;
  price: number;
  id: number;
}
