"use client";
import { useOrder } from "./orderprovider";
import { useEffect, useState } from "react";

export default function CheckoutDrawer() {
  const { items, total, currency, open, setOpen, remove, clear } = useOrder();
  const [email, setEmail] = useState("");

  // helper: minor->major
  const fmt = (v: number, cur: string) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: cur }).format(v / 100);

  const checkout = async () => {
    if (!items.length || !currency) return;

    // If INR → Razorpay; else → Stripe Checkout
    if (currency === "INR") {
      // Create Razorpay order
      const res = await fetch("/api/checkout/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, email }),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to create order");

      // load script once
      if (!(window as any).Razorpay) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://checkout.razorpay.com/v1/checkout.js";
          s.onload = resolve;
          s.onerror = reject;
          document.body.appendChild(s);
        });
      }

      const rzp = new (window as any).Razorpay({
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.razorpayOrderId,
        name: "Nirgranth Creations",
        prefill: { email },
        handler: function () {
          // Success – Razorpay will also send a webhook if you add one.
          window.location.href = `/success?order=${encodeURIComponent(data.razorpayOrderId)}&provider=razorpay`;
          clear();
        },
        theme: { color: "#e7546b" },
      });
      rzp.open();
    } else {
      // Stripe Checkout redirect
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, email, currency }),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.error || "Failed to create checkout");
      // Redirect to Stripe-hosted checkout page
      window.location.href = data.url;
    }
  };

  useEffect(() => {
    // close on route change (optional)
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 h-full w-[380px] bg-white dark:bg-gray-900 shadow-2xl z-50 p-5 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="space-y-4 max-h-[55vh] overflow-auto">
          {!items.length && <p className="text-sm opacity-70">Cart is empty.</p>}
          {items.map(i => (
            <div key={i.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm opacity-70">
                  {fmt(i.price * i.qty, i.currency)} • {i.qty}x
                </div>
              </div>
              <button className="text-sm opacity-70 hover:opacity-100" onClick={() => remove(i.id)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <input
            type="email"
            placeholder="Email (receipt)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-800"
          />
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold">{currency ? fmt(total, currency) : "-"}</span>
          </div>
          <button
            onClick={checkout}
            disabled={!items.length}
            className="w-full rounded-xl bg-pink-600 text-white py-3 font-semibold hover:opacity-95 disabled:opacity-50"
          >
            {currency === "INR" ? "Pay with Razorpay" : "Checkout"}
          </button>
        </div>
      </aside>
    </>
  );
}
