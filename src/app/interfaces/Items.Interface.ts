import { Timestamp } from "firebase/firestore";
import { StaticImageData } from "next/image";

export default interface GetItemsInterface {
  id?: number;
  topRightImage?: StaticImageData;
  toplLeftImage?: StaticImageData;
  bottonRightImage?: StaticImageData;
  bottonLeftImage?: StaticImageData;
  description?: string;
  title?: string;
  color?: string;
  price?: number;
  avaliability?: Timestamp;
  stock?: number;
  quantity?: number;
}
