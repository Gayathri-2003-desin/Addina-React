// services/getProductById.js
import axios from "axios";

const getProductByIdAPI = async (productId) => {
  const response = await axios.get(
    "http://164.52.215.173:4002/api/product/getProductByIdOrSlug",
    {
      params: { productId },
    }
  );
  return response.data; // { success, payload }
};

export default getProductByIdAPI;
