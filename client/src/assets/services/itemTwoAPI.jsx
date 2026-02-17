import axios from "axios";

const getProductByIdAPI = async (productId) => {
  try {
    const response = await axios.get(
      "http://164.52.215.173:4002/api/product/getProductByIdOrSlug",
      {
        params: { productId }, 
      }
    );

    return response.data; 
  } catch (error) {
    console.error("getProductByIdAPI error:", error);
    throw error;
  }
};

export default getProductByIdAPI;
