"use client";

import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "./prod";
import { useRouter } from "next/navigation";

export default function GiftsClient() {
  const { cart, addToCart } = useCart();
  const router = useRouter();

  return (
    <main className="relative bg-gradient-to-b from-amber-50 via-white to-amber-100 text-gray-900 min-h-screen">
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{p.name}</h3>
                <p className="text-gray-600 mb-3">
                  {p.stock <= 3 ? <span className="text-red-500">🔥 Only {p.stock} left!</span> : "Available"}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-pink-600">₹{p.price}</span>
                  <span className="line-through text-gray-400">{p.oldPrice}</span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart({ id: p.id.toString(), name: p.name, price: p.price, quantity: 1,img:p.img })}
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
        <button
          onClick={() => router.push("/checkout")}
          className="fixed bottom-6 right-6 bg-pink-600 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition"
        >
          🛒 {cart.length} Items
        </button>
      )}
    </main>
  );
}
