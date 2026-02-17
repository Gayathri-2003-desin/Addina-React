import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentOption = ({ onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!paymentMethod) {
      setError("Please select a payment option to continue");
      return;
    }

    setError("");
    onConfirm(paymentMethod);

    if (paymentMethod === "ONLINE") {
      navigate("/online-payment");
    } else {
      navigate("/confirmation");
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">
        Choose a Payment Option
      </h2>

      {/* COD */}
      <label className="flex items-start gap-4 border rounded-lg p-4 mb-4 cursor-pointer">
        <input
          type="radio"
          name="payment"
          value="COD"
          checked={paymentMethod === "COD"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1"
        />
        <div>
          <h3 className="font-semibold">Cash On Delivery</h3>
          <p className="text-sm text-gray-600">
            Pay with cash when your order is delivered.
          </p>
        </div>
      </label>

      {/* ONLINE */}
      <label className="flex items-start gap-4 border rounded-lg p-4 cursor-pointer">
        <input
          type="radio"
          name="payment"
          value="ONLINE"
          checked={paymentMethod === "ONLINE"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1"
        />
        <div>
          <h3 className="font-semibold">Online Payment</h3>
          <p className="text-sm text-gray-600">
            Pay securely via Card, UPI, or Net Banking.
          </p>
        </div>
      </label>

      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      <div className="flex justify-end gap-4 mt-8">
        <Link to="/summary">
          <button className="px-6 py-2 border rounded-md">
            Back
          </button>
        </Link>

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-[#b18b5e] text-white rounded hover:bg-[#a0774d]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentOption;
