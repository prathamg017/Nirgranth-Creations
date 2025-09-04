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
    <main className="relative bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 text-gray-900 min-h-screen overflow-hidden">
      {/* Animated Offer Bar */}
      <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 text-white text-center py-3 font-semibold animate-pulse">
        🎉 Festival Special: Flat 20% Off Today Only + Free Delivery 🚚
      </div>

      {/* Hero */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/7b/4b/e7/7b4be7bab18d46a45ef157e6556633ef.jpgg')] bg-cover bg-center opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow">
            Jain Focused Gifts 🛕
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Handcrafted treasures inspired by Jain traditions. Bring home{" "}
            <span className="text-pink-600 font-semibold">spiritual joy</span>.
          </p>
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.08 }}
            className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Start Shopping ✨
          </motion.a>
        </motion.div>
      </section>

      {/* Products */}
      <section id="shop" className="py-20 px-6 max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Shop Spiritual Treasures
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((p) => (
           <motion.div
  key={p.id}
  whileHover={{ y: -6 }}
  className="relative bg-white/90 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-amber-200"
>
  {/* Tag */}
  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs px-2.5 py-1 rounded-full shadow">
    {p.tag}
  </div>

  {/* Image */}
  <Image
    src={p.img}
    alt={p.name}
    width={400}
    height={250}
    className="w-full h-80 object-cover"
  />

  {/* Content */}
  <div className="p-4 flex flex-col">
    <h3 className="text-lg font-semibold mb-1 text-gray-800">{p.name}</h3>
    <p className="text-sm text-gray-600 mb-2">
      {p.stock <= 3 ? (
        <span className="text-red-500">🔥 Only {p.stock} left!</span>
      ) : (
        "Available"
      )}
    </p>

    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl font-bold text-pink-600">₹{p.price}</span>
      <span className="line-through text-gray-400 text-sm">{p.oldPrice}</span>
    </div>

    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() =>
        addToCart({
          id: p.id.toString(),
          name: p.name,
          price: p.price,
          quantity: 1,
          img: p.img,
        })
      }
      className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2.5 rounded-lg font-medium shadow hover:shadow-lg transition"
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
        <motion.button
          onClick={() => router.push("/checkout")}
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              "0 0 0px #e7546b",
              "0 0 15px #e7546b",
              "0 0 0px #e7546b",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-6 py-4 rounded-full shadow-xl font-semibold"
        >
          🛒 {cart.length} Items
        </motion.button>
      )}
    </main>
  );
}
