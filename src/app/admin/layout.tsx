"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // works only in client components

  const links = [
    { href: "/admin", label: "📊 Dashboard" },
    { href: "/admin/orders", label: "📦 Orders" },
    { href: "/admin/contact", label: "✉️ Contact Queries" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#e7546b]">Admin Panel</h2>
        <nav className="flex flex-col gap-3 mt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-2 rounded-md text-black ${
                pathname === link.href
                  ? "bg-[#e7546b] text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
