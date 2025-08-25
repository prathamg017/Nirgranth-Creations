"use client";

import Script from "next/script";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

interface CheckoutButtonProps {
  amount?: number; // optional, can pass from parent
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutButton({ amount }: CheckoutButtonProps) {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  // Use passed amount or calculate from cart
  const totalAmount =
    amount ?? cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = async () => {
    if (totalAmount <= 0) {
      alert("🛒 Cart is empty!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });

      if (!res.ok) throw new Error("Failed to create Razorpay order");

      const data = await res.json();

      if (!window.Razorpay) {
        alert("⚠️ Razorpay SDK not loaded. Please refresh the page.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // from .env.local
        amount: data.amount, // in paise
        currency: "INR",
        name: "Nirgranth Creations",
        description: "Order Payment",
        order_id: data.id,
        handler: function (response: any) {
          alert(
            `✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
          );
          clearCart();
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: { color: "#e7546b" },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Ensure Razorpay SDK loads */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-3 rounded-xl font-semibold shadow-md transition 
        ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:shadow-lg hover:scale-[1.02]"
        }`}
      >
        {loading ? "Processing..." : `Pay ₹${totalAmount}`}
      </button>
    </>
  );
}
