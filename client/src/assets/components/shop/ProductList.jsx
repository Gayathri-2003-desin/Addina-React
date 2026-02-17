import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getFilteredProductsAPI from "../../services/ProductApi";
import { Heart } from "lucide-react";
import ProductOnePage from "../../pages/productOnePage";
import handleAddToWishlist from "../WishbtnHandler";
import getMyWishlistAPI from "../../services/GetWishlist";
import deleteWishlistAPI from "../../services/deleteWishlistAPI";

import handleAddToCart from "../CartHandler";
import getMyCartAPI from "../../services/GetCart";
import removeFromCartAPI from "../../services/deleteCartAPI";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlistedProducts, setWishlistedProducts] = useState([]);

  /* -------------------- WISHLIST TOGGLE -------------------- */
  const toggleWishlist = async (productId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    try {
      if (wishlistedProducts.includes(productId)) {
        await deleteWishlistAPI(productId, token);
        setWishlistedProducts((prev) =>
          prev.filter((id) => id !== productId)
        );
      } else {
        await handleAddToWishlist(productId, token);
        setWishlistedProducts((prev) => [...prev, productId]);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };


  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const res = await getMyCartAPI(token);
        const cartIds = res.map((item) => item.product._id);
        setCartProducts(cartIds);
      } catch (err) {
        console.error("Error fetching cart", err);
      }
    };

    fetchCart();
  }, []);

  const isInCart = (productId) =>
    cartProducts.some((id) => id.toString() === productId.toString());

  const addToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return alert("Please login first");

    try {
      await handleAddToCart(productId);
      setCartProducts((prev) => [...prev, productId]);
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return alert("Please login first");

    try {
      await removeFromCartAPI(productId, token);
      setCartProducts((prev) =>
        prev.filter((id) => id !== productId)
      );
    } catch (err) {
      console.error("Remove cart error:", err);
    }
  };

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFilteredProductsAPI();
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const data = await getMyWishlistAPI(token);
        const wishlistIds = data.map(
          (item) => item.product._id
        );
        setWishlistedProducts(wishlistIds);
      } catch (err) {
        console.error("Error fetching wishlist", err);
      }
    };

    fetchWishlist();
  }, []);


  return (
    <div className="flex flex-col gap-9 mx-[100px]">
      <h1 className="font-bold">
        {products.length} Items on List
      </h1>

      <div className="grid grid-cols-5 gap-6">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((item) => {
            const product = item.products;

            return (
              <div key={product._id} className="flex flex-col items-center">
                <div className="border p-4 rounded-md relative hover:shadow-lg w-full h-full">

                  
                  <button
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                    onClick={() => toggleWishlist(product._id)}
                  >
                    <Heart
                      size={20}
                      color="red"
                      fill={
                        wishlistedProducts.includes(product._id)
                          ? "red"
                          : "none"
                      }
                    />
                  </button>

                  
                  <Link to={`/item-one/${product._id}`}>
                    <img
                      src={product.productImages?.[0]}
                      alt={product.name}
                      className="w-full h-[180px] object-cover cursor-pointer"
                    />
                  </Link>

                 
                  <Link to={`/item-one/${product._id}`}>
                    <h3 className="mt-2 font-semibold hover:text-[#b18b5e]">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-[#b18b5e] font-bold">
                    ₹{product.sellingPrice}
                  </p>
                </div>

               
                <button
                  className="mt-2 w-full bg-[#b18b5e] text-white py-2 rounded hover:bg-[#a0774d]"
                  onClick={() =>
                    isInCart(product._id)
                      ? removeFromCart(product._id)
                      : addToCart(product._id)
                  }
                >
                  {isInCart(product._id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
