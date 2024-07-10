import { NewProduct } from "@/app/interfaces/NewProduct.interface";
import { LoginUser } from "@/app/interfaces/LoginUser.interface";
import { parseCookies } from "nookies";
import { NewTicket } from "@/app/interfaces/NewTicket.interface";
import { NewCart } from "@/app/interfaces/CartInterface";
import axios from "axios";
import GetItemsInterface from "@/app/interfaces/Items.Interface";

const url = "http://localhost:8080";

const getCookie = () => {
  const nookie = parseCookies();

  const cookie = nookie["HAL-Token"];
  console.log("HAL-TOKEN", cookie);
  return cookie;
};

const login = async ({ email, password }: LoginUser) => {
  try {
    const response = await axios.post(`${url}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login!!", error);
    throw new Error("erro ao fazer login!");
  }
};

const getAllProducts = async () => {
  const cookie = getCookie();
  try {
    const response = await axios.get(`${url}/api/products`, {
      headers: {
        authorization: cookie,
      },
    });

    const { productObjDocs, userName, role } = response.data;

    return productObjDocs;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const getProductsById = async (pid: string) => {
  const cookie = getCookie();
  try {
    console.log("PID: ", pid);
    const response = await axios.get(`${url}/api/products/${pid}`, {
      headers: {
        authorization: cookie,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

const createProduct = async ({
  title,
  description,
  price,
  code,
  stock,
  thumbmail,
}: NewProduct) => {
  const cookie = getCookie();

  try {
    const NewProduct = await axios.post(
      `${url}/api/products`,
      { title, description, price, code, stock, thumbmail },
      {
        headers: {
          authorization: cookie,
        },
      }
    );

    return NewProduct.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createCart = async (product: GetItemsInterface, id?: string) => {
  const cookie = getCookie();
  try {
    const newCart = await axios.post(
      `${url}/cart`,
      { product, id },
      {
        headers: {
          authorization: cookie,
        },
      }
    );

    return newCart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCart = async () => {};

const createTicket = async ({ purchaser, products, valorTotal }: NewTicket) => {
  const cookie = getCookie();
  try {
    const newTicket = await axios.post(
      `${url}/ticket`,
      { purchaser, products, valorTotal },
      {
        headers: {
          authorization: cookie,
        },
      }
    );
    if (newTicket.status == 201) {
      return newTicket.data;
    } else {
      throw new Error("erro ao adicionar o ticket no banco");
    }
  } catch (e) {
    console.log(e);
    return new Error("Falha no ticket");
  }
};

export {
  getAllProducts,
  getProductsById,
  login,
  createProduct,
  createCart,
  getCart,
  createTicket,
};
