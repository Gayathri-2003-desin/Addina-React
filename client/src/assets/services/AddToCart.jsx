import axios from "axios";

const addToCartAPI = async (productId, quantity = 1, token) => {


  const res = await axios.post(
    `http://164.52.215.173:4002/api/carts/addToCart`,
    {
    product:productId,
    productCount:quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.payload;
};

export default addToCartAPI;
