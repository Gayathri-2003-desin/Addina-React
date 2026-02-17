import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CheckoutSteps from "../components/ClipBoard";
import AddAddressModal from "../components/AddAddressModal";
import EditAddressModal from "../components/EditAddressModal";
import getAddressAPI from "../services/getMyAddress";
import deleteAddressAPI from "../services/deleteAddressAPI";
import { Link } from "react-router-dom";
import ShopCart from "./ShopCart";

import {
  Home,
  User,
  MapPin,
  Phone,
  Pencil,
  Trash2,
} from "lucide-react";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    if (!token) return;
    try {
      const data = await getAddressAPI(token);
      setAddresses(data || []);
    } catch (err) {
      console.error("Failed to fetch address", err);
    }
  };

  const handleNextStep = () => {
    if (!selectedAddress) {
      setError("Please select a shipping address to continue");
      return;
    }

    // ✅ SAVE SELECTED ADDRESS
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(selectedAddress)
    );

    navigate("/summary");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CheckoutSteps currentStep={1} />

      <div className="mx-10 mt-6 flex gap-8">
        {/* LEFT - ADDRESS LIST */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((addr) => (
            <label
              key={addr._id}
              className={`border rounded-xl p-5 cursor-pointer transition
                ${
                  selectedAddress?._id === addr._id
                    ? "border-teal-600 bg-teal-50"
                    : "hover:border-gray-400"
                }`}
            >
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress?._id === addr._id}
                  onChange={() => {
                    setSelectedAddress(addr);
                    setError("");
                  }}
                  className="mt-1 accent-teal-600"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <Home className="w-4 h-4" />
                    {addr.addressType}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4" />
                    {addr.name}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    {addr.city}, {addr.state}, {addr.pincode}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    {addr.phone}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setEditAddress(addr)}
                    className="border border-blue-500 text-blue-500 p-2 rounded"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => deleteAddressAPI(addr._id, token).then(fetchAddresses)}
                    className="border border-red-500 text-red-500 p-2 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </label>
          ))}
        </div>

        {/* RIGHT - ADD ADDRESS */}
        <div className="w-64">
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3 bg-[#b18b5e] text-white rounded-lg hover:bg-[#a0774d]"
          >
            + ADD ADDRESS
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}

      {/* NEXT STEP */}
      <div className="flex justify-end mx-10 mt-6 mb-10 gap-6">
 <Link to="/shopcart">
    <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition">
      Back
    </button>
  </Link>

        <button
          onClick={handleNextStep}
          className="w-64 py-3 bg-[#b18b5e] text-white rounded-lg hover:bg-[#a0774d]"
        >
          Next Step
        </button>
      </div>

      {editAddress && (
        <EditAddressModal
          address={editAddress}
          onClose={() => setEditAddress(null)}
          refresh={fetchAddresses}
        />
      )}

      {showModal && (
        <AddAddressModal
          onClose={() => setShowModal(false)}
          refresh={fetchAddresses}
        />
      )}

      <Footer />
    </div>
  );
};

export default AddressPage;
