import axios from "axios";

const getMyWishlistAPI = async (token) => {
  const res = await axios.get(
    "http://164.52.215.173:4002/api/products/getMyWishList",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.payload;
};

export default getMyWishlistAPI;
