// app/admin/contact/page.tsx
import dbConnect from "@/app/mongo";
import Contact from "@/app/models/admincontact";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function ContactsPage() {
  // 1️⃣ Get token from cookies
  const cookieStore = cookies();
  const token = (await cookieStore).get("admin_token")?.value;

  // 2️⃣ Verify JWT
  try {
    jwt.verify(token!, process.env.JWT_SECRET!);
  } catch (err) {
    // Redirect to login if token is invalid
    return new Response(null, {
      status: 302,
      headers: { Location: "/admin/login" },
    });
  }

  // 3️⃣ Connect to DB and fetch contacts
  await dbConnect();
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

  // 4️⃣ Render server-side HTML
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">✉️ Contact Queries</h1>

      {contacts.length === 0 ? (
        <p className="text-black">No contact queries found.</p>
      ) : (
        <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
<tr key={String(contact._id)} className="text-black text-center">
                <td className="p-3 border">{idx + 1}</td>
                <td className="p-3 border">{contact.name}</td>
                <td className="p-3 border">{contact.email}</td>
                <td className="p-3 border">{contact.phone || "-"}</td>
                <td className="p-3 border">{contact.message}</td>
                <td className="p-3 border">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
