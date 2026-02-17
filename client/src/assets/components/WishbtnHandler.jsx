import { Heart } from "lucide-react";
import { addWishlistAPI } from "../services/AddToWishlist";

const handleAddToWishlist = async (productId) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    alert("Please login to add items to wishlist");
    return;
  }

  try {
    await addWishlistAPI(productId, token);
    alert("Added to wishlist ❤️");
  } catch (error) {
  
    alert("Failed to add to wishlist");
  }
};
 
export default handleAddToWishlist