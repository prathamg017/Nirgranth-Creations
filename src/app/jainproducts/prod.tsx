// app/jain-gifts/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  img: string;
  tag: string;
  stock: number;
}

// Image pool
const images = [
  'https://i.pinimg.com/1200x/09/dc/25/09dc25200e1893f3512ac6fe26efd594.jpg',
  'https://i.pinimg.com/1200x/bb/a2/0d/bba20dbdb2be5057582c7421967425e6.jpg',
  'https://i.pinimg.com/1200x/e5/18/38/e51838f10321c24cdbd4064585ddbe92.jpg',
  'https://i.pinimg.com/1200x/cc/07/4c/cc074c589ca6238ffbb52f3a2e9bb68b.jpg',
  'https://i.pinimg.com/1200x/0d/31/39/0d3139298ddbdc7275d8d4037a4ef120.jpg',
  'https://i.pinimg.com/1200x/ba/e6/af/bae6afd5dbc7e6218250d0b896d5491e.jpg',
];

export const products: Product[] = [
  {
    id: 1,
    name: "Handmade Jain Idol",
    price: 1200,
    oldPrice: 1500,
    img: images[0],
    tag: "⭐ Bestseller",
    stock: 2,
  },
  {
    id: 2,
    name: "Spiritual Wall Frame",
    price: 800,
    oldPrice: 1000,
    img: images[1],
    tag: "🔥 Limited Stock",
    stock: 5,
  },
  {
    id: 3,
    name: "Pooja Gift Set",
    price: 999,
    oldPrice: 1299,
    img: images[2],
    tag: "✨ Festival Offer",
    stock: 3,
  },
  {
    id: 4,
    name: "Decorative Jain Thali",
    price: 1499,
    oldPrice: 1799,
    img: images[3],
    tag: "🌸 New Arrival",
    stock: 6,
  },
  {
    id: 5,
    name: "Traditional Oil Lamp",
    price: 650,
    oldPrice: 899,
    img: images[4],
    tag: "🕯 Trending",
    stock: 4,
  },
  {
    id: 6,
    name: "Jainism Book Set",
    price: 1100,
    oldPrice: 1400,
    img: images[5],
    tag: "📚 Reader’s Choice",
    stock: 7,
  },
  {
    id: 7,
    name: "Festive Gift Basket",
    price: 1999,
    oldPrice: 2399,
    img: images[0],
    tag: "🎁 Perfect Gift",
    stock: 5,
  },
  {
    id: 8,
    name: "Sacred Cloth (Chadar)",
    price: 899,
    oldPrice: 1199,
    img: images[1],
    tag: "🧵 Premium Fabric",
    stock: 3,
  },
  {
    id: 9,
    name: "Temple Bell",
    price: 750,
    oldPrice: 950,
    img: images[2],
    tag: "🔔 Auspicious",
    stock: 2,
  },
];
