import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");

    console.log(response.data);

    return response.data;
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

export { getAllProducts, getProductsById };
