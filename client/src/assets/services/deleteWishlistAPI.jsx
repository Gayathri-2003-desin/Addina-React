import axios from "axios";

const deleteWishlistAPI = async (wishlistId, token) => {
  const res = await axios.delete(
    `http://164.52.215.173:4002/api/products/deleteMyWishList/${wishlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export default deleteWishlistAPI;
