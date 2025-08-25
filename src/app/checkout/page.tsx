"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import CheckoutButton from "@/app/components/checkoutbutton";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
    <main className="min-h-screen bg-amber-50 py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Checkout 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-2xl shadow-sm hover:shadow-lg transition hover:bg-pink-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={item.img || "/placeholder.png"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-500">₹{item.price} × {item.quantity}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200"
                    >
                      -
                    </button>
                    <span className="font-bold  text-black">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary / Checkout */}
          <div className="w-full md:w-96 bg-pink-50 rounded-2xl p-6 flex flex-col gap-6 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-700">Order Summary</h2>

            {/* Promo code */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                value={promo}
                onChange={(e) => setPromo(e.target.value.toUpperCase())}
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              <div className="flex justify-between text-gray-600">
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

            {/* Checkout button */}
            <CheckoutButton amount={total} />

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="text-red-500 hover:underline text-center mt-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
