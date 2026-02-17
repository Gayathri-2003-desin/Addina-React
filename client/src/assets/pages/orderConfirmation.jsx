import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Home, List } from "lucide-react";
import { Link } from "react-router-dom";
import getMyCartAPI from "../services/GetCart";
import removeFromCartAPI from "../services/deleteCartAPI";


const OrderConfirmation = () => {
  const [alertShown, setAlertShown] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orderDate, setOrderDate] = useState("");

  const token = localStorage.getItem("accessToken");

  
  const fetchCartItems = async () => {
    if (!token) return;

    try {
      const cartData = await getMyCartAPI(token);

      // ✅ Ensure array before mapping
      const itemsArray = Array.isArray(cartData)
        ? cartData
        : cartData?.cart || [];

      const formattedItems = itemsArray.map((item) => ({
        id: item?.product?._id || Math.random(),
        name: item?.product?.name || "Unknown Product",
        sellingPrice: Number(item?.product?.sellingPrice) || 0,
        originalPrice:
          Number(item?.product?.price || item?.product?.mrp) || 0,
        quantity: Number(item?.productCount) || 1,
      }));

      setCartItems(formattedItems);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
      setCartItems([]);
    }
  };


  useEffect(() => {
    const address = localStorage.getItem("shippingAddress");
    if (address) {
      setShippingAddress(JSON.parse(address));
    }

    setOrderDate(new Date().toLocaleString());
    fetchCartItems();
  }, []);

  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  const discount = cartItems.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.sellingPrice) * item.quantity,
    0
  );

  const totalPaid = subtotal - discount;

  useEffect(() => {
  if (cartItems.length > 0 && token) {
    clearCartAfterOrder();
  }
}, [cartItems]);

const clearCartAfterOrder = async () => {
  try {
    await Promise.all(
      cartItems.map(item =>
        removeFromCartAPI(item.id, token)
      )
    );
    console.log("Cart cleared successfully");
  } catch (err) {
    console.error("Failed to clear cart", err);
  }
};

useEffect(() => {
  if (!alertShown) {
    alert("✅ Your order has been confirmed successfully!");
    setAlertShown(true);
  }
}, [alertShown]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold mb-3">Order Status</h3>
          <p className="text-green-600 font-medium">● Order Confirmed</p>
          <p className="text-sm text-gray-500 mt-1">{orderDate}</p>
        </div>

        
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold mb-3">Order Details</h3>
          <p>
            <strong>Order ID:</strong> OD{Date.now()}
          </p>
          <p>
            <strong>Order Date:</strong> {orderDate}
          </p>
          <p>
            <strong>Payment Type:</strong> Cash On Delivery
          </p>
        </div>

       
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold mb-3">Shipping Address</h3>
          {shippingAddress ? (
            <p className="text-sm flex gap-2">
              <Home className="w-4 h-4 mt-1" />
              {shippingAddress.name}, {shippingAddress.city},{" "}
              {shippingAddress.state}, {shippingAddress.pincode},{" "}
              {shippingAddress.country}
            </p>
          ) : (
            <p className="text-sm text-gray-400">No address found</p>
          )}
        </div>

        
        <div className="col-span-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Products</h3>
            <List />
          </div>

          <table className="w-full text-sm bg-white rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">PRODUCT NAME</th>
                <th className="text-center p-3">QUANTITY</th>
                <th className="text-center p-3">PRICE</th>
                <th className="text-center p-3">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      ${item.sellingPrice.toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button className="bg-gray-100 px-3 py-1 rounded text-gray-400">
                        View Review
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-4 text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          
          <div className="flex justify-end mt-6">
            <div className="w-64 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>SubTotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Discount applied</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold">
                <span>Total Paid</span>
                <span>${totalPaid.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-span-4 flex justify-end gap-4">
          <Link
            to="/home"
            className="border px-6 py-2 rounded flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Home
          </Link>

          <button className="bg-teal-600 text-white px-6 py-2 rounded flex items-center gap-2">
            <List className="w-4 h-4" /> My Orders
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
