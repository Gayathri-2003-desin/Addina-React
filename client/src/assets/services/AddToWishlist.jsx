import axios from "axios";
 
export const addWishlistAPI = async (productId, token) => {
  const wishlistData = {
    userId: token,
    product: productId,
    _id: "...",
    createdAt: "...",
    updatedAt: "...", 
    __v: 0
  }

  const res = await axios.post(
    `http://164.52.215.173:4002/api/products/addToWishList/${productId}`,
    { payload: wishlistData }, 
    {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    }
  );

  return res.data.payload;
};
