"use client";

import { useCart } from "@/app/context/CartContext";
import { Product, products } from "@/app/jainproducts/prod";
import Image from "next/image";

export default function SuggestedProducts() {
  const { addToCart } = useCart();

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">People Also Like</h2>

      <div className="flex flex-col gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-xl bg-pink-50 hover:bg-pink-100 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{product.name}</p>
                <p className="text-gray-500 text-sm line-through">
                  ₹{product.oldPrice}
                </p>
                <p className="text-pink-600 font-bold">₹{product.price}</p>
                <p className="text-xs text-gray-500">{product.tag}</p>
              </div>
            </div>

            <button
  onClick={() =>
    addToCart({ ...product, id: product.id.toString(), quantity: 1 })
  }
  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
>
  Add
</button>

          </div>
        ))}
      </div>
    </div>
  );
}
