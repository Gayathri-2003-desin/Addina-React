import { useState, useEffect } from "react";
import getMyCartAPI from "../services/GetCart";
import removeFromCartAPI from "../services/deleteCartAPI";

const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // Fetch cart items on mount
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const res = await getMyCartAPI(token);
        const cartIds = res.map(item => item.product);
        setCartProducts(cartIds);
      } catch (err) {
        console.error("Error fetching cart", err);
      }
    };

    fetchCart();
  }, []);

  // Check if a product is in cart
  const isInCart = (productId) => cartProducts.includes(productId);

  // Remove product from cart
  const removeFromCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await removeFromCartAPI(productId, token);
      setCartProducts(prev => prev.filter(id => id !== productId));
    } catch (error) {
      console.error("Remove cart error:", error.response?.data || error.message);
    }
  };

  return { cartProducts, isInCart, removeFromCart };
};

export default useCart;
