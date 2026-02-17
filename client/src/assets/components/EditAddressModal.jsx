import React, { useState, useEffect } from "react";
import updateAddressAPI from "../services/updateAddressAPI";

const EditAddressModal = ({ address, onClose, refresh }) => {
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

  useEffect(() => {
    if (address) {
      setForm({
        name: address.name || "",
        addressLine1: address.addressLine1 || "",
        city: address.city || "",
        state: address.state || "",
        country: address.country || "India",
        pincode: address.pincode || "",
        phone: address.phone || "",
        landMark: address.landMark || "",
        addressType: address.addressType || "home",
      });
    }
  }, [address]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!address?._id) {
      console.error("Address ID missing");
      return;
    }

    console.log("Updating address:", address._id, form);

    try {
      await updateAddressAPI(address._id, form, token);
      console.log("working");
      onClose();
      refresh();
    } catch (err) {
      console.error("Update failed:", err.response?.data || err);
      
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form onSubmit={handleUpdate} className="bg-white w-full max-w-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Edit Address</h3>

        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} className="input" />
          <input name="addressLine1" value={form.addressLine1} onChange={handleChange} className="input" />
          <input name="city" value={form.city} onChange={handleChange} className="input" />
          <input name="state" value={form.state} onChange={handleChange} className="input" />
          <input name="pincode" value={form.pincode} onChange={handleChange} className="input" />
          <input name="phone" value={form.phone} onChange={handleChange} className="input" />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">
            Update Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAddressModal;
