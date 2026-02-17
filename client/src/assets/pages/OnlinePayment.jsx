import React, { useEffect, useState } from "react";
import axios from "axios";
import getMyCartAPI from "../services/GetCart";



const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const OnlinePayment = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const data = await getMyCartAPI(token);

      console.log("ONLINE PAYMENT CART (SHOULD BE ARRAY):", data);

      setCart(data || []);
    } catch (err) {
      console.error("Failed to load cart", err);
    } finally {
      setLoading(false);
    }
  };

  fetchCart();
}, []);


  

const subtotal = cart.reduce(
  (sum, item) => sum + item.product.sellingPrice * item.productCount,
  0
);


 const totalUSD = subtotal;

  const handlePayment = async () => {
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const payload = {
        billingAddressId: "6967671e8061485c367c1b3c",
        shippingAddressId: "6967671e8061485c367c1b3c",
        paymentType: "ONLINE",
        currency: "USD",
        amount: Math.round(totalUSD * 100),
      };

      const { data } = await axios.post(
        "http://164.52.215.173:4002/api/orders/checkoutCart",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const options = {
        key: "rzp_test_E0w3T0BxSD7Y8m",
        amount: Math.round(totalUSD * 100),
        currency: "USD",
        order_id: data.orderId,
        name: "Bluecast Technologies",
        description: "Order Payment",
        handler: (response) => {
          console.log("Payment success:", response);
        },
        theme: { color: "#b18b5e" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Checkout failed");
    }
  };

  if (loading) return <p className="p-10">Loading payment...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Complete Your Payment
      </h2>

      <div className="border rounded-lg p-4 mb-6">
        <div className="flex justify-between text-lg font-bold">
          <span>Amount to Pay</span>
          <span>${totalUSD.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-[#b18b5e] text-white py-3 rounded-md hover:bg-[#a0774d]"
      >
        Pay Now
      </button>
    </div>
  );
};

export default OnlinePayment;
