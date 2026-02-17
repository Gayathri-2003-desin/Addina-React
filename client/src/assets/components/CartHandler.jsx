
import addToCartAPI from "../services/AddToCart";

const handleAddToCart = async (productId) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    alert("Please login to add items to cart");
    return;
  }

  try {
    const res = await addToCartAPI(productId, 1, token);
    console.log("Add to cart response:", res);
    alert("Product added to cart 🛒");
    return res;
  } catch (error) {
    console.error("Add to cart error:", error);
    alert("Failed to add product to cart");
    throw error;
  }
}; 

export default handleAddToCart;
