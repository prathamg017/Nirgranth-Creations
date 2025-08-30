"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutButton({ amount, formData, cart }: any) {
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("⚠️ Please fill all customer details");
      return;
    }

    try {
      setLoading(true);

      console.log("📡 Creating Razorpay order...");
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email: formData.email }),
      });

      const data = await res.json();
      console.log("✅ Razorpay order response:", data);

      // 🔎 Debug: see the whole response
      if (!data?.id) {
        console.error("❌ Invalid API response:", data);
        throw new Error("Order id not returned from API");
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "My Store",
        description: "E-commerce Payment",
        order_id: data.id, // ✅ correct
        handler: async function (response: any) {
          console.log("💳 Payment Success Response:", response);

          const saveRes = await fetch("/api/save-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              formData,
              cart,
              amount,
              payment: response,
            }),
          });

          const saveData = await saveRes.json();
          console.log("💾 Save order response:", saveData);

          alert("✅ Payment Successful!");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#f472b6" },
      };

      console.log("🚀 Opening Razorpay checkout with options:", options);
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("❌ Payment Error:", err);
      alert("❌ Payment Failed: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
      onClick={startPayment}
        disabled={loading}
        className="bg-pink-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-pink-700 transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </>
  );
}
