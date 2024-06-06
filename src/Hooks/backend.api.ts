import axios from "axios";
interface LoginUser {
  email:string, 
  password: string
}

const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");

    console.log(response.data);
    const {productObjDocs,userName,role} = response.data

    return productObjDocs;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const getProductsById = async (pid: string) => {
  try {
    console.log("PID: ", pid);
    const response = await axios.get(`http://localhost:8080/products/${pid}`);

    console.log("RESPOSTA: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

const login = async ({email, password}:LoginUser) => {
  try {
    const response = await axios.post("http://localhost:8080/login",{
      email,password    
    })

    console.log(response.data);
    return response.data;


  } catch (error) {
    console.error("Erro ao fazer login!!", error)
    throw new Error('erro ao fazer login!')
  }
}

export { getAllProducts, getProductsById,login };
