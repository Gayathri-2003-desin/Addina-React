import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-btn"
      >
        <Menu size={28} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-md border z-50">
          <ul className="flex flex-col">
            <li
              onClick={() => navigate("/profile")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Profile Page
            </li>

            <li
              onClick={() => navigate("/orders")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Orders
            </li>

            <li
              onClick={() => navigate("/wishlist")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Wishlist
            </li>

            <li
              onClick={() => navigate("/settings")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Settings
            </li>

            <li
              onClick={handleLogout}
              className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
