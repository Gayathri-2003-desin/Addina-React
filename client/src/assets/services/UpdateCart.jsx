 import axios from "axios";
 
 const updateCartAPI = async (cartItemId, productId, quantity, token) => {
  try {
    const res = await axios.put(
      "http://164.52.215.173:4002/api/carts/updateCart",
      {
        _id: cartItemId,      // cart item id
        product: productId,   // product id
        productCount: quantity
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    return res.data;
  } catch (err) {
    console.error("Update cart failed:", err.response?.data || err.message);
    throw new Error(`Update cart failed: ${err.response?.status}`);
  }
};
export default updateCartAPI