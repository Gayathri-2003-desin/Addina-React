import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import PageLanding from "../components/about/PageLanding";
import Footer from "../Footer";
import getMyCartAPI from "../services/GetCart";
import updateCartAPI from "../services/UpdateCart";

const ShopCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getMyCartAPI(token);
        setCart(data || []);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);


const increaseQty = async (item) => {
  const token = localStorage.getItem("accessToken");
  if (!token) return alert("Please login to update cart");

  try {
    setUpdatingId(item._id); // optional: disable buttons while updating
    const newQty = item.productCount + 1;
    await updateCartAPI(item._id, item.product._id, newQty, token);

    // ✅ Update state instantly
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, productCount: newQty }
          : cartItem
      )
    );
  } catch (err) {
    console.error("Increase qty error:", err);
    alert("Failed to update cart.");
  } finally {
    setUpdatingId(null);
  }
};

const decreaseQty = async (item) => {
  const token = localStorage.getItem("accessToken");
  if (!token) return alert("Please login to update cart");

  try {
    if (item.productCount <= 1) return;
    setUpdatingId(item._id);

    const newQty = item.productCount - 1;
    await updateCartAPI(item._id, item.product._id, newQty, token);

    // ✅ Update state instantly
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, productCount: newQty }
          : cartItem
      )
    );
  } catch (err) {
    console.error("Decrease qty error:", err);
    alert("Failed to update cart.");
  } finally {
    setUpdatingId(null);
  }
};



 
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


  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <PageLanding title="Cart" subtitle="Home . Cart" />

      <div className="min-h-[300px] flex justify-center">
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <h3 className="text-center text-3xl font-bold">
            This Cart is Empty
          </h3>
        ) : (
          <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            
           
            <div className="md:col-span-2">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border rounded-lg p-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.productImages?.[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div>
                      <h4 className="font-semibold">
                        {item.product.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        ${item.product.sellingPrice} per unit
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item)}
                          disabled={
                            item.productCount === 1 ||
                            updatingId === item._id
                          }
                          className="px-3 py-1 border rounded disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="font-semibold">
                          {item.productCount}
                        </span>

                        <button
                          onClick={() => increaseQty(item)}
                          disabled={updatingId === item._id}
                          className="px-3 py-1 border rounded disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="font-bold">
                    ${item.product.sellingPrice * item.productCount}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: PRICE DETAILS */}
            <div className="border rounded-lg p-6 h-fit shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Price details
              </h3>

              <div className="flex justify-between mb-3 text-gray-600">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3 text-green-600">
                <span>Discount Applied</span>
                <span>-${discount.toFixed(2)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total Payable</span>
                <span>${totalPayable.toFixed(2)}</span>
              </div>

<Link to="/address">
  <button className="w-full bg-[#b18b5e] text-white py-3 rounded-lg font-semibold hover:bg-[#b18b5e] transition">
    PLACE ORDER
  </button>
</Link>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopCart;
