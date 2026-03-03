"use client";

import ChatBot from "@/app/components/ChatBot";
import Navbar from "@/app/components/Navbar";
import ToastProvider from "@/app/components/toast";
import { ThemeProvider } from "next-themes";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastProvider>
        <Navbar />
        <main>{children}</main>
        <ChatBot />
      </ToastProvider>
    </ThemeProvider>
  );
}
