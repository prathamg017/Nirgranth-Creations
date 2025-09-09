"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, ReactNode, useContext, useState } from "react";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 2 seconds
    setTimeout(() => removeToast(id), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Centered Toast Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`pointer-events-auto max-w-md w-full p-6 rounded-2xl shadow-xl backdrop-blur-md border flex flex-col items-center justify-center text-center cursor-pointer`}
              style={{
                backgroundColor: "#ffe9ed", // light pink background
                borderColor: "#e7546b",     // primary pink border
                color: "#e7546b",           // text in brand pink
              }}
              onClick={() => removeToast(toast.id)} // remove on click
            >
              <div className="text-4xl mb-2">
                {toast.type === "success"
                  ? "✅"
                  : toast.type === "error"
                  ? "❌"
                  : "ℹ️"}
              </div>
              <p className="text-lg font-semibold">{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
