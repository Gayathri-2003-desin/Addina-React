import axios from "axios";

const removeFromCartAPI = async (productId, token) => {
  const res = await axios.delete(
    "http://164.52.215.173:4002/api/carts/deleteCartByProduct",
    {
      params: {
        productId: productId,   // query param
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

export default removeFromCartAPI;
