import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import PageLanding from "../components/about/PageLanding";
import Footer from "../Footer";
import { Heart } from "lucide-react";

import getMyWishlistAPI from "../services/GetWishlist";
import deleteWishlistAPI from "../services/deleteWishlistAPI";

import addToCartAPI from "../services/AddToCart";
import getMyCartAPI from "../services/GetCart";
import removeFromCartAPI from "../services/deleteCartAPI";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");

  /* -------------------- FETCH CART -------------------- */
  useEffect(() => {
    const fetchCart = async () => {
      if (!token) return;

      try {
        const res = await getMyCartAPI(token);
        const cartIds = res.map(item => item.product._id);
        setCartProducts(cartIds);
      } catch (err) {
        console.error("Error fetching cart", err);
      }
    };

    fetchCart();
  }, [token]);

  /* -------------------- FETCH WISHLIST -------------------- */
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getMyWishlistAPI(token);
        setWishlist(data || []);
      } catch (err) {
        console.error("Error fetching wishlist", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [token]);

  /* -------------------- HELPERS -------------------- */
  const isInCart = (productId) => {
    return cartProducts.some(
      id => id.toString() === productId.toString()
    );
  };

  /* -------------------- WISHLIST -------------------- */
  const handleRemoveWishlist = async (productId) => {
    if (!token) return;

    try {
      await deleteWishlistAPI(productId, token);
      setWishlist(prev =>
        prev.filter(item => item.product._id !== productId)
      );
    } catch (err) {
      console.error("Remove wishlist failed", err);
    }
  };

  /* -------------------- CART -------------------- */
  const handleAddToCart = async (productId) => {
    if (!token) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      await addToCartAPI(productId, 1, token);
      setCartProducts(prev => [...prev, productId]);
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Failed to add to cart");
    }
  };

  const handleRemoveFromCart = async (productId) => {
    if (!token) return;

    try {
      await removeFromCartAPI(productId, token);
      setCartProducts(prev => prev.filter(id => id !== productId));
    } catch (err) {
      console.error("Remove cart failed", err);
    }
  };

  /* -------------------- UI -------------------- */
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <PageLanding title="Wishlist" subtitle="Home . Wishlist" />

      <div className="container mx-auto px-4">
        {loading ? (
          <h3 className="text-center text-xl">Loading...</h3>
        ) : wishlist.length === 0 ? (
          <h3 className="text-center text-3xl font-bold">
            Wishlist is Empty
          </h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {wishlist.map((item) => {
              const product = item.product;
              const inCart = isInCart(product._id);

              return (
                <div
                  key={product._id}
                  className="border p-4 rounded-lg shadow relative"
                >
                  {/* Remove Wishlist */}
                  <button
                    onClick={() => handleRemoveWishlist(product._id)}
                    className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md"
                  >
                    <Heart size={22} fill="red" color="red" />
                  </button>

                  <img
                    src={product.productImages?.[0]}
                    alt={product.name}
                    className="w-full h-[220px] object-cover rounded"
                  />

                  <h4 className="mt-3 text-lg font-semibold">
                    {product.name}
                  </h4>

                  <p className="text-gray-600 mb-3">
                    ${product.sellingPrice}
                  </p>

                  <button
                    onClick={() =>
                      inCart
                        ? handleRemoveFromCart(product._id)
                        : handleAddToCart(product._id)
                    }
                    className={`w-full text-white py-2 rounded ${
                      inCart
                        ? "bg-red-500"
                        : "bg-[#6fa8a6]"
                    }`}
                  >
                    {inCart ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
