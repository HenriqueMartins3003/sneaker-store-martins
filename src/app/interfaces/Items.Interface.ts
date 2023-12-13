import { StaticImageData } from "next/image";

export default interface GetItemsInterface {
  principalImage: StaticImageData;
  description: string;
  title: string;
  price: number;
  id: number;
}
