"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import PayButton from "@/app/components/paybutton"; // ✅ use your reusable Razorpay button

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - discount;

  const applyPromo = () => {
    if (promo === "NIR20") {
      setDiscount(subtotal * 0.2);
      alert("✅ Promo Applied! 20% off.");
    } else {
      alert("❌ Invalid promo code");
    }
  };

  return (
    <main className="min-h-screen bg-white py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Checkout 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl max-w-6xl mx-auto flex flex-col md:flex-row gap-10 p-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={item.img || "/placeholder.png"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 font-medium hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary / Checkout */}
          <div className="w-full md:w-96 bg-gray-50 rounded-xl p-6 flex flex-col gap-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900">Customer Info</h2>

            {/* Customer Info Form */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder:text-gray-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder:text-gray-400"
              />
              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              Order Summary
            </h2>

            {/* Promo code */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                value={promo}
                onChange={(e) => setPromo(e.target.value.toUpperCase())}
                className="flex-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder:text-gray-400"
              />
              <button
                onClick={applyPromo}
                className="bg-pink-600 text-white px-4 rounded-lg hover:bg-pink-700 transition"
              >
                Apply
              </button>
            </div>

            {/* Subtotal & total */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* ✅ Reusable Razorpay Checkout Button */}
            <PayButton amount={total} formData={formData} cart={cart} />

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="text-red-600 hover:underline text-center mt-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
