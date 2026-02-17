import React, { useEffect, useState } from "react";
import getMyCartAPI from "./services/GetCart";
import { Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setCartCount(0);
        return;
      }

      const cartItems = await getMyCartAPI(token);
      setCartCount(cartItems.length);
    } catch (err) {
      console.error("Failed to fetch cart", err);
      setCartCount(0);
    }
  };

  fetchCart();
}, []);


  return (
    /* ✅ STICKY WRAPPER (ONLY ADDITION) */
    <div className="sticky top-0 z-50 bg-white">

      {/* ORIGINAL NAVBAR UI — UNCHANGED */}
      <div className="flex justify-around mt-10">

        <div className="flex justify-center self-center">
          <img src="/logo.svg" alt="logo" className="w-40" />
        </div>

        <div className="flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/home"><h4>Home</h4></Link>
        </div>

        <div className="text-black flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/about"><h4>About</h4></Link>
        </div>

        <div className="text-black flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/shop"><h4>Shop</h4></Link>
        </div>

        <div className="text-black flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/pages"><h4>Pages</h4></Link>
        </div>

        <div className="text-black flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/blog"><h4>Blog</h4></Link>
        </div>

        <div className="text-black flex gap-10 justify-center self-center text-base font-medium">
          <Link to="/contact"><h4>Contact</h4></Link>
        </div>

        {/* SEARCH — UNCHANGED */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-full pl-4 pr-0 py-0 w-fit">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
          <div className="bg-[#b18b5e] p-4 rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13.4443 13.4445L16.9999 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M15.2222 8.11111C15.2222 12.0385 12.0385 15.2222 8.11111 15.2222C4.18375 15.2222 1 12.0385 1 8.11111C1 4.18375 4.18375 1 8.11111 1C12.0385 1 15.2222 4.18375 15.2222 8.11111Z" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* WISHLIST + CART */}
        <div className="flex gap-6 self-center">

          {/* WISHLIST — UNCHANGED */}
          <Link to="/wishlist">
            <div className="cursor-pointer">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="white">
                <path
                  d="M12 21s-7.5-4.7-10-9.3C-0.2 7.5 2.1 2.5 6.7 2.5c2 0 3.7 1 5.3 2.6C13.6 3.5 15.3 2.5 17.3 2.5c4.6 0 6.9 5 4.7 9.2C19.5 16.3 12 21 12 21Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          </Link>

          {/* CART WITH BADGE */}
          <Link to="/shopcart">
            <div className="relative cursor-pointer">
              <svg width="21" height="23" viewBox="0 0 21 23" fill="none">
                <path
                  d="M14.0625 10.6C14.0625 12.5883 12.4676 14.2 10.5 14.2C8.53243 14.2 6.9375 12.5883 6.9375 10.6M1 5.8H20M1 5.8V13C1 20.6402 2.33946 22 10.5 22C18.6605 22 20 20.6402 20 13V5.8M1 5.8L2.71856 2.32668C3.12087 1.5136 3.94324 1 4.84283 1H16.1571C17.0568 1 17.8791 1.5136 18.2814 2.32668L20 5.8"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>

              {/* 🔴 BADGE */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>

        <div className="flex self-center">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
