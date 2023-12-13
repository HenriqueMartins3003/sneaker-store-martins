import principalImage from "../../../public/sneaker-1.png";
import jordanImage from "../../../public/JDGreen-top.png";
import yeeziPrincipal from "../../../public/Yeezy-PrincipalImage.webp";

import GetItemsInterface from "@/app/interfaces/Items.Interface";

import TopRImg from "../../../public/JDGreen-Right.webp";
import TopLImg from "../../../public/JDGreen-top.png";
import BottonLImg from "../../../public/JDGreen-sola.png";
import BottonRImg from "../../../public/JDGreen-Left.png";
import ImgBack from "../../../public/JDGreen-Back.png";

import YeezyImg from "../../../public/Yeezy-PrincipalImage.webp";
import YeezyBack from "../../../public/Yeezy-RightImage.webp";
import YeezySola from "../../../public/Yeezy-SolaImage.webp";
import YeezyTop from "../../../public/yeezy-TopImage.webp";

import SpaceJam from "../../../public/Sneaker_spaceJam3.png";
import SpaceJamTop from "../../../public/sneaker-1.png";
import SpaceJamR from "../../../public/sneaker_spaceJam2.png";
import SpaceJamL from "../../../public/sneaker_spaceJam2.png";

import ItemsDetailInterface from "@/app/interfaces/ItemsDetail.interface";

const getItems = (): Promise<GetItemsInterface[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: "",
          price: 1450,
          title: `Nike Air Space Jam`,
          principalImage: principalImage,
        },
        {
          id: 2,
          description: "",
          price: 1450,
          title: `Nike Jordan 4`,
          principalImage: jordanImage,
        },
        {
          id: 3,
          description: " ",
          price: 1450,
          title: `YEEZY BOOST 350 V2`,
          principalImage: yeeziPrincipal,
        },
        {
          id: 4,
          description: " ",
          price: 1450,
          title: `Nike Jordan 4`,
          principalImage: jordanImage,
        },
        {
          id: 5,
          description: " ",
          price: 1450,
          title: `Nike Jordan 4`,
          principalImage: principalImage,
        },
      ]);
    }, 1000);
  });
};

const getItemsDetail = (): Promise<ItemsDetailInterface[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: "990,00",
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          color: "Branco e Azul Bebê",
          avaliability: new Date().getUTCFullYear(),
          bottonLeftImage: SpaceJam,
          bottonRightImage: SpaceJamL,
          toplLeftImage: SpaceJamR,
          topRightImage: SpaceJamTop,
          backImg: SpaceJam,
          stock: 10,
        },
        {
          id: 2,
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,

          price: "990,00",
          stock: 10,
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          color: "Branco e Azul Bebê",
          avaliability: new Date().getUTCFullYear(),
          bottonLeftImage: SpaceJam,
          bottonRightImage: SpaceJamL,
          toplLeftImage: SpaceJamR,
          topRightImage: SpaceJamTop,
          backImg: SpaceJam,
        },
        {
          id: 3,
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: "990,00",
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          color: "Branco e Azul Bebê",
          avaliability: new Date().getUTCFullYear(),
          bottonLeftImage: SpaceJam,
          bottonRightImage: SpaceJamL,
          toplLeftImage: SpaceJamR,
          topRightImage: SpaceJamTop,
          backImg: SpaceJam,
        },
        {
          id: 4,
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: "990,00",
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          color: "Branco e Azul Bebê",
          avaliability: new Date().getUTCFullYear(),
          bottonLeftImage: SpaceJam,
          bottonRightImage: SpaceJamL,
          toplLeftImage: SpaceJamR,
          topRightImage: SpaceJamTop,
          backImg: SpaceJam,
        },
        {
          id: 5,
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
                        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
                        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
                        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: "990,00",
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          color: "Branco e Azul Bebê",
          avaliability: new Date().getUTCFullYear(),
          bottonLeftImage: SpaceJam,
          bottonRightImage: SpaceJamL,
          toplLeftImage: SpaceJamR,
          topRightImage: SpaceJamTop,
          backImg: SpaceJam,
        },
      ]);
    }, 500);
  });
};

export { getItems, getItemsDetail };
