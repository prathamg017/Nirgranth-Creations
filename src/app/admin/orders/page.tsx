// app/admin/orders/page.tsx
import dbConnect from "@/app/mongo";
import Order from "@/app/models/adminorder";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  // 1️⃣ Get token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  // 2️⃣ Verify JWT
  try {
    jwt.verify(token!, process.env.JWT_SECRET!);
  } catch (err) {
    redirect("/admin/login"); // ✅ use redirect instead of Response
  }

  // 3️⃣ Connect to DB and fetch orders
  await dbConnect();
  const orders = await Order.find().sort({ createdAt: -1 }).lean();

  // 4️⃣ Render server-side HTML
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">📦 Orders</h1>

      {orders.length === 0 ? (
        <p className="text-black">No orders found.</p>
      ) : (
        <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Payment ID</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={String(order._id)} className="text-black text-center">
                <td className="p-3 border">{idx + 1}</td>
                <td className="p-3 border">{order.customer?.name || "-"}</td>
                <td className="p-3 border">{order.customer?.email || "-"}</td>
                <td className="p-3 border">{order.customer?.phone || "-"}</td>
                <td className="p-3 border">{order.customer?.address || "-"}</td>
                <td className="p-3 border">₹{order.amount || "-"}</td>
                <td className="p-3 border">{order.paymentId || "-"}</td>
                <td className="p-3 border">{order.status || "Pending"}</td>
                <td className="p-3 border">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
