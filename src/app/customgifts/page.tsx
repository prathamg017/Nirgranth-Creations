// app/custom-gifts/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext"; // ✅ Use Cart Context
import { products as allProducts, Product } from "../jainproducts/prod";

export default function CustomGiftsPage() {
  const { cart, addToCart } = useCart(); // ✅ from context
  const router = useRouter();

  return (
    <main className="font-sans bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="relative bg-white h-[60vh] flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-pink-700">
            Customised & Handmade Gifts
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Curated luxury gifts crafted with passion. Personalised, timeless, unforgettable.
          </p>
          <Link
            href="#products"
            className="mt-6 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* OFFERS BAR */}
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center py-3 font-semibold">
        🎉 Limited Time: Up to 25% Off on Selected Gifts + Free Shipping 🚚
      </div>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-12">
          Handpicked Treasures
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((p: Product) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden relative border border-gray-200 cursor-pointer"
            >
              {/* Badge */}
              {p.tag && (
                <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {p.tag}
                </div>
              )}

              {/* IMAGE */}
              <div className="relative h-64 w-full">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{p.name}</h3>
                <p className="text-gray-500 mb-3">
                  {typeof p.stock === "number" && p.stock <= 3
                    ? `🔥 Only ${p.stock} left!`
                    : "Available"}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-pink-600">₹{p.price}</span>
                  <span className="line-through text-gray-400">₹{p.oldPrice}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    addToCart({
                      id: p.id.toString(),
                      name: p.name,
                      price: p.price,
                      quantity: 1,
                      img: p.img,
                    })
                  }
                  className="w-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
                >
                  Add to Cart 🛒
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLOATING CART BUTTON (Checkout redirect) */}
      {cart.length > 0 && (
        <button
          onClick={() => router.push("/checkout")}
          className="fixed bottom-6 right-6 bg-pink-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition"
        >
          🛒 {cart.length} Item{cart.length > 1 ? "s" : ""}
        </button>
      )}

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-pink-700">
          Why Our Gifts Stand Out
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "100% Handmade",
            "Luxury Packaging",
            "Personalised Options",
            "Festival & Occasions Ready",
          ].map((txt, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              {txt}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-yellow-500 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready to Gift Luxury?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl">
          Browse, select, and make every occasion unforgettable.
        </p>
        <Link
          href="#products"
          className="inline-block px-8 py-4 rounded-full bg-white text-pink-700 font-bold shadow hover:scale-105 transition-transform"
        >
          Start Shopping
        </Link>
      </section>
    </main>
  );
}
  