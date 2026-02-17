import axios from "axios";

const getMyCartAPI = async (token) => {
  const res = await axios.get(
    "http://164.52.215.173:4002/api/carts/getMyCart",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.payload.cartItems;
};

export default getMyCartAPI
