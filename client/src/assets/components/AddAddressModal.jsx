import React, { useState } from "react";
import axios from "axios";

const AddAddressModal = ({ onClose, refresh }) => {
  const token = localStorage.getItem("accessToken");

  const [form, setForm] = useState({
    name: "",
    addressLine1: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    phone: "",
    landMark: "",
    addressType: "home",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://164.52.215.173:4002/api/address/addAddress",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      refresh();   // reload address list
      onClose();   // close popup
    } catch (err) {
      console.error("Add address failed", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Add Address</h3>

        <div className="space-y-3">
          <input name="name" placeholder="Name" onChange={handleChange} className="input w-full border p-2 rounded" />
          <input name="addressLine1" placeholder="Address" onChange={handleChange} className="input w-full border p-2 rounded" />
          <input name="city" placeholder="City" onChange={handleChange} className="input w-full border p-2 rounded" />
          <input name="state" placeholder="State" onChange={handleChange} className="input w-full border p-2 rounded" />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} className="input w-full border p-2 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="input w-full border p-2 rounded" />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-teal-600 text-white rounded"
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;
