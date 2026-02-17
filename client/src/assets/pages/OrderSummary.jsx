import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getMyCartAPI from "../services/GetCart";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CheckoutSteps from "../components/ClipBoard";
import AddressPage from "./AddressPage";

const OrderSummary = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const data = await getMyCartAPI(token);
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

const discount = cart.reduce((sum, item) => {
  const original = item.product.price || item.product.mrp || 0;
  const selling = item.product.sellingPrice || 0;
  return sum + (original - selling) * item.productCount;
}, 0);

const totalPayable = subtotal;


  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <>
    <div className="flex flex-col gap-10">
<div>
      <Navbar />
</div>

<div>
     <CheckoutSteps currentStep={2} />
</div>
<h2 className="text-2xl font-bold text-gray-600 mx-[200px] ">Order Summary</h2>

<div>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-semibold text-lg">
                {item.product.name}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="line-through text-gray-400">
                  ${item.product.price}
                </span>
                <span className="text-green-600 font-bold">
                  ${item.product.sellingPrice}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                quantity: {item.productCount}
              </p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Price details
          </h3>

          <div className="flex justify-between mb-3">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3 text-green-600">
            <span>Discount Applied</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total Payable</span>
            <span>${totalPayable.toFixed(2)}</span>
          </div>
        </div>
      </div>
</div>
<div>
<div className="flex justify-end gap-4 mx-[200px] ">
  
  <Link to="/address">
    <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition">
      Back
    </button>
  </Link>


<Link
  to="/payment"
  state={{ amount: totalPayable }}
>
  <button className="w-54 py-3 rounded-lg font-semibold bg-[#b18b5e] text-white hover:bg-[#a0774d]">
    Next Step
  </button>
</Link>
</div>
</div>
<div>
      <Footer />
      </div>
      </div>
    </>
  );
};

export default OrderSummary;
