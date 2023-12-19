import GetItemsInterface from "@/app/interfaces/Items.Interface";

import TopRImg from "../../../public/JDGreen-Right.webp";
import TopLImg from "../../../public/JDGreen-top.png";
import BottonLImg from "../../../public/JDGreen-sola.png";
import ImgBack from "../../../public/JDGreen-Back.png";

import YeezyImg from "../../../public/Yeezy-PrincipalImage.webp";
import YeezyBack from "../../../public/Yeezy-RightImage.webp";
import YeezySola from "../../../public/Yeezy-SolaImage.webp";
import YeezyTop from "../../../public/yeezy-TopImage.webp";

import SpaceJam from "../../../public/Sneaker_spaceJam3.png";
import SpaceJamTop from "../../../public/sneaker-1.png";
import SpaceJamR from "../../../public/sneaker_spaceJam2.png";
import SpaceJamL from "../../../public/sneaker_spaceJam2.png";

const getItems = (): Promise<GetItemsInterface[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          avaliability: new Date().getUTCFullYear(),
          color: "Branco e Azul Bebê",
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: 990,
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          bottonLeftImage: SpaceJamL,
          bottonRightImage: SpaceJamR,
          toplLeftImage: SpaceJamTop,
          topRightImage: SpaceJam,
          quantity: 0,
        },
        {
          id: 2,
          avaliability: new Date().getUTCFullYear(),
          color: "Medium Olive",
          description: `Apaixone-se pelo Olive. Esta edição do clássico de 1989 apresenta camurça, 
          couro e tecidos em elegantes tons terrosos. Os painéis laterais inspirados em malha são gravados em relevo para uma abordagem tátil do original.
          E todos os outros elementos icónicos do AJ4 também estão presentes,
          como os ilhoses flutuantes, o guarda-lamas ondulado e a marca Jumpman.`,
          price: 1890,
          title: `Air Jordan 4 Retro Craft`,
          stock: 3,
          bottonLeftImage: TopRImg,
          bottonRightImage: TopLImg,
          toplLeftImage: BottonLImg,
          topRightImage: ImgBack,
          quantity: 0,
        },
        {
          id: 3,
          avaliability: new Date().getUTCFullYear(),
          color: "Slate",
          description: `Construído em cano baixo, o Yeezy Boost 350 V2 “Slate” apresenta colorway clean e discreta em bege claro 
          e a clássica tarja preta nas laterais. Seu cabedal feito de tecido torna o modelo semelhante a uma meia com gola mais alta no tornozelo.
          Sua tecnologia Boost garante conforto inigualável, com amortecimento macio e duradouro.
          `,
          price: 2370,
          title: `TÊNIS ADIDAS YEEZY BOOST 350 V2`,
          stock: 10,
          bottonLeftImage: YeezyImg,
          bottonRightImage: YeezyBack,
          toplLeftImage: YeezySola,
          topRightImage: YeezyTop,
          quantity: 0,
        },
        {
          id: 4,
          avaliability: new Date().getUTCFullYear(),
          color: "Branco e Azul Bebê",
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: 990,
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          bottonLeftImage: SpaceJamL,
          bottonRightImage: SpaceJamR,
          toplLeftImage: SpaceJamTop,
          topRightImage: SpaceJam,
          quantity: 0,
        },
        {
          id: 5,
          avaliability: new Date().getUTCFullYear(),
          color: "Branco e Azul Bebê",
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: 990,
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          bottonLeftImage: SpaceJamL,
          bottonRightImage: SpaceJamR,
          toplLeftImage: SpaceJamTop,
          topRightImage: SpaceJam,
          quantity: 0,
        },
        {
          id: 6,
          avaliability: new Date().getUTCFullYear(),
          color: "Branco e Azul Bebê",
          description: `Clássico e atemporal, o tênis Nike Air Force 1 07 é um modelo que nunca sai de moda!
        Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, 
        com cabedal todo feito de couro. Os detalhes incluem Swooshes laterais e a assinatura 
        Nike Air estampada nas etiquetas das línguas e na região dos calcanhares.`,
          price: 990,
          title: `NIKE AIR FORCE 1 07 X SPACE JAM`,
          stock: 10,
          bottonLeftImage: SpaceJamL,
          bottonRightImage: SpaceJamR,
          toplLeftImage: SpaceJamTop,
          topRightImage: SpaceJam,
          quantity: 0,
        },
      ]);
    }, 1000);
  });
};

export { getItems };
