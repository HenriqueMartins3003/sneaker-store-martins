import { NewProduct } from "@/app/interfaces/NewProduct.interface";
import { LoginUser } from "@/app/interfaces/LoginUser.interface";
import {parseCookies} from "nookies"
import axios from "axios";

const url = 'http://localhost:8080'

  const getCookie = () => {
    const nookie = parseCookies();
    
    const cookie = nookie['HAL-Token']
    console.log('HAL-TOKEN', cookie)
    return cookie;
  }

  const login = async ({email, password}:LoginUser) => {
    try {
      const response = await axios.post("http://localhost:8080/login",{
        email,password    
      })
  
  
      return response.data;
  
  
    } catch (error) {
      console.error("Erro ao fazer login!!", error)
      throw new Error('erro ao fazer login!')
    }
  }

  const getAllProducts = async () => {
  
  const cookie = getCookie();
  try {
    const response = await axios.get("http://localhost:8080/products",{
      headers:{
        'authorization': cookie
      }
    });

   
    const {productObjDocs,userName,role} = response.data

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
    const response = await axios.get(`${url}/products/${pid}`,{
      headers: {
        'authorization': cookie
      }
    });

   
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

const createProduct = async ({title,description,price,code,stock,thumbmail}: NewProduct) => {
  const cookie = getCookie()


try {
  const NewProduct = await axios.post(`${url}/products`,{title,description,price,code,stock,thumbmail},{headers: {
    'authorization': cookie
  }})

  return NewProduct.data
} catch (error) {
  console.error(error)
  return null 
}



}

export { getAllProducts, getProductsById,login, createProduct };
