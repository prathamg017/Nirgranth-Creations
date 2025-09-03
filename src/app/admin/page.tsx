// app/admin/page.tsx
import dbConnect from "@/app/mongo";
import Order from "@/app/models/adminorder";
import Contact from "@/app/models/admincontact";
import Session from "@/app/models/session";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

function formatCurrency(amount: number) {
  if (amount >= 1_00_00_000) return `₹${(amount / 1_00_00_000).toFixed(2)} Cr`;
  if (amount >= 1_00_000) return `₹${(amount / 1_00_000).toFixed(2)} L`;
  if (amount >= 1_000) return `₹${(amount / 1_000).toFixed(2)} K`;
  return `₹${amount}`;
}

export default async function AdminDashboard() {
  // 1️⃣ Get token from cookies
  const token = (await cookies()).get("admin_token")?.value;

  if (!token) return redirect("/admin/login");

  // 2️⃣ Verify JWT
  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    return redirect("/admin/login");
  }

  // 3️⃣ Connect to DB
  await dbConnect();

  // 4️⃣ Check session validity
  const session = await Session.findOne({ token, valid: true });
  if (!session) return redirect("/admin/login");

  // 5️⃣ Fetch orders and contacts
  const orders = await Order.find().sort({ createdAt: -1 }).lean();
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

  // 6️⃣ Calculate stats
  const totalRevenue = orders.reduce((sum, o) => sum + (o.amount ?? 0), 0);
  const pendingOrders = orders.filter(o => o.status?.toLowerCase() === "pending").length;
  const paidOrders = orders.filter(o => o.status?.toLowerCase() === "paid").length;
  const recentOrders = orders.slice(0, 5);
  const recentContacts = contacts.slice(0, 5);

  // 7️⃣ Render
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">📊 Dashboard Overview</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-black">📦 Total Orders</h2>
          <p className="text-4xl font-bold text-[#e7546b]">{orders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-black">💰 Total Revenue</h2>
          <p className="text-4xl font-bold text-[#e7546b]">{formatCurrency(totalRevenue)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-black">⏳ Pending Orders</h2>
          <p className="text-4xl font-bold text-[#e7546b]">{pendingOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-black">✉️ Total Contact Queries</h2>
          <p className="text-4xl font-bold text-[#e7546b]">{contacts.length}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-black">🆕 Recent Orders</h2>
        <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Payment ID</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, idx) => (
              <tr key={String(order._id)} className="text-black text-center">
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border">{order.customer?.name || "-"}</td>
                <td className="p-2 border">{order.customer?.email || "-"}</td>
                <td className="p-2 border">{order.customer?.phone || "-"}</td>
                <td className="p-2 border">{order.customer?.address || "-"}</td>
                <td className="p-2 border">{formatCurrency(order.amount ?? 0)}</td>
                <td className="p-2 border">{order.paymentId || "-"}</td>
                <td className="p-2 border">{order.status || "Pending"}</td>
                <td className="p-2 border">{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Recent Contact Queries */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">🆕 Recent Contact Queries</h2>
        <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((contact, idx) => (
              <tr key={String(contact._id)} className="text-black text-center">
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border">{contact.name}</td>
                <td className="p-2 border">{contact.email}</td>
                <td className="p-2 border">{contact.message.slice(0, 50)}...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
