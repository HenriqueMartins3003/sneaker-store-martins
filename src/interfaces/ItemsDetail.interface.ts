import { StaticImageData } from "next/image";

export default interface ItemsDetailInterface {
  id?: number;
  topRightImage?: StaticImageData;
  toplLeftImage?: StaticImageData;
  bottonRightImage?: StaticImageData;
  bottonLeftImage?: StaticImageData;
  backImg?: StaticImageData;
  description?: string;
  title?: string;
  color?: string;
  price?: string;
  avaliability?: number;
}
