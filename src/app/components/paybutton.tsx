"use client";

import { useToast } from "@/app/components/toast";
import { useRouter } from "next/navigation"; // ✅ Import router
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img?: string;
}

interface PayButtonProps {
  amount: number;
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  cart: CartItem[];
  label?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PayButton({
  amount,
  formData,
  cart,
  label = "Place Order",
}: PayButtonProps) {
  const [loading, setLoading] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const router = useRouter(); // ✅ Initialize router
  const { showToast } = useToast();


  // Load Razorpay SDK dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => console.error("❌ Failed to load Razorpay SDK");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!isRazorpayLoaded) {
      showToast("⚠️ Razorpay SDK not loaded yet. Please try again.");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Save order in DB
      const dbRes = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, formData, cart, status: "pending" }),
      });
      const dbData = await dbRes.json();
      if (!dbData?.success) {
        showToast("❌ Failed to save order in DB");
        setLoading(false);
        return;
      }

      const orderId = dbData.dbOrder._id;

      // 2️⃣ Create Razorpay order
      const rzpRes = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email: formData.email }),
      });
      const rzpOrder = await rzpRes.json();
      if (!rzpOrder?.id) {
        showToast("❌ Failed to create Razorpay order");
        setLoading(false);
        return;
      }

      // 3️⃣ Initialize Razorpay Checkout
      const options = {
        key: rzpOrder.key,
        amount: rzpOrder.amount,
        currency: rzpOrder.currency,
        order_id: rzpOrder.id,
        name: "Nirgranth Creations",
        description: "Order Payment",
        handler: async function (response: any) {
          try {
            const res = await fetch("/api/updateorder", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId,
                status: "paid",
                paymentId: response.razorpay_payment_id,
              }),
            });
            const data = await res.json();
            if (!data.success) {
              console.error("❌ Failed to update order:", data);
              showToast("⚠️ Payment succeeded but updating order failed!");
              return;
            }

            showToast("✅ Payment successful!");
            router.push("/"); // ✅ Redirect after success
          } catch (err) {
            console.error("⚠️ Error updating order:", err);
            showToast("⚠️ Payment succeeded but something went wrong updating order.");
          }
        },
        modal: {
          ondismiss: async function () {
            try {
              await fetch("/api/updateorder", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId, status: "cancelled" }),
              });
              showToast("⚠️ Payment cancelled");
            } catch (err) {
              console.error("⚠️ Error updating cancelled order:", err);
            }
          },
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: { address: formData.address },
        theme: { color: "#ec4899" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("⚠️ Error during payment:", err);
      showToast("⚠️ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
        loading ? "bg-gray-400" : "bg-pink-600 hover:bg-pink-700"
      }`}
    >
      {loading ? "Processing..." : `${label} ₹${amount}`}
    </button>
  );
}
