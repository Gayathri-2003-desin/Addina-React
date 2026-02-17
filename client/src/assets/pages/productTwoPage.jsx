import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import getProductByIdAPI from "../services/itemOneApI";

import handleAddToWishlist from "../components/WishbtnHandler";
import getMyWishlistAPI from "../services/GetWishlist";
import deleteWishlistAPI from "../services/deleteWishlistAPI";

import handleAddToCart from "../components/CartHandler";
import getMyCartAPI from "../services/GetCart";
import removeFromCartAPI from "../services/deleteCartAPI";


const ProductOnePage = () => {
  const { productId } = useParams();
  const token = localStorage.getItem("accessToken");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductByIdAPI(productId);
        if (res.success) setProduct(res.payload);
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

 
  const syncCartAndWishlist = useCallback(async () => {
    if (!token || !product?._id) return;

    try {
      const [wishlistRes, cartRes] = await Promise.all([
        getMyWishlistAPI(token),
        getMyCartAPI(token),
      ]);

      setIsInWishlist(
        wishlistRes?.payload?.some(
          (item) => item.productId?._id === product._id
        )
      );

      setIsInCart(
        cartRes?.payload?.some(
          (item) => item.productId?._id === product._id
        )
      );
    } catch (err) {
      console.error("Sync error:", err);
    }
  }, [token, product]);

  useEffect(() => {
    syncCartAndWishlist();
  }, [syncCartAndWishlist]);

  
  const toggleWishlist = async () => {
    if (!token) return alert("Please login first");

    if (isInWishlist) {
      await deleteWishlistAPI(product._id, token);
      setIsInWishlist(false);
    } else {
      await handleAddToWishlist(product._id, token);
      setIsInWishlist(true);
    }
  };

 
  const toggleCart = async () => {
    if (!token) return alert("Please login first");

    if (isInCart) {
      await removeFromCartAPI(product._id, token);
      setIsInCart(false);
    } else {
      await handleAddToCart(product._id, 1, token);
      setIsInCart(true);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        {loading && <p>Loading product...</p>}

        {!loading && product && (
          <div className="grid md:grid-cols-2 gap-8">
            
          <img
  src={product.productImages?.[0]}
  alt={product.productName}
  className="w-full max-w-md rounded-lg shadow"
/>

          
            <div>
              <h1 className="text-3xl font-semibold mb-4">
                {product.productName}
              </h1>

              <p className="text-xl font-medium mb-2">
                ₹{product.price}
              </p>

              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              
              <div className="flex gap-4">
                <button
                  onClick={toggleCart}
                  className={`px-6 py-3 rounded-md text-white ${
                    isInCart ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {isInCart ? "Remove from Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={toggleWishlist}
                  className={`px-6 py-3 rounded-md ${
                    isInWishlist
                      ? "bg-pink-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {isInWishlist ? "Wishlisted ❤️" : "Add to Wishlist 🤍"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductOnePage;
