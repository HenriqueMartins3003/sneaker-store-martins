import { StaticImageData } from "next/image";

export default interface GetItemsInterface {
  _id?: string;
  title?: string;
  description?: string;
  price?: number;
  stock?: number;
  code?: string;
  thumbmail: StaticImageData;
  quantity?: number;
}
