// app/jain-gifts/GiftsClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "./prod"; // ✅ Import product list

export default function GiftsClient() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <main className="relative bg-gradient-to-b from-amber-50 via-white to-amber-100 text-gray-900">
      {/* Offer Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center py-3 font-semibold">
        🎉 Festival Special: Flat 20% Off Today Only + Free Delivery 🚚
      </div>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-[url('https://i.ibb.co/sRZFnKq/jain-pattern.png')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-700">
            Jain Focused Gifts 🛕
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Discover handcrafted, spiritual gifts inspired by Jain traditions.
            Perfect for festivals, pooja, and thoughtful offerings.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-pink-600">
          Shop Spiritual Treasures ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-200 relative"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-pink-500 text-white text-sm px-3 py-1 rounded-full shadow">
                {p.tag}
              </div>

              <Image
                src={p.img}
                alt={p.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {p.stock <= 3 ? (
                    <span className="text-red-500">🔥 Only {p.stock} left!</span>
                  ) : (
                    "Available"
                  )}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-pink-600">
                    ₹{p.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ₹{p.oldPrice}
                  </span>
                </div>

                {/* Add to Cart */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(p.id)}
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
                >
                  Add to Cart 🛒
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 bg-pink-600 text-white px-5 py-3 rounded-full shadow-xl cursor-pointer"
        >
          🛒 {cart.length} Items
        </motion.div>
      )}

      {/* Trust Section */}
      <section className="py-16 text-center bg-amber-50 border-t border-amber-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-700">
          Why Choose Our Gifts?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "100% Handmade",
            "Inspired by Jainism",
            "Fast & Safe Delivery",
            "Spiritual Guarantee",
          ].map((txt, i) => (
            <div
              key={i}
              className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm"
            >
              {txt}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
