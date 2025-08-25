"use client";
import { createContext, useContext, useMemo, useState } from "react";

type CartItem = {
  id: string;       // product id/slug
  title: string;
  price: number;    // in base currency *minor* units (e.g., paise or cents)
  currency: "INR" | "USD" | "EUR" | "GBP" | string;
  qty: number;
  image?: string;
};

type OrderContextType = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
  currency: string | null;       // currency of the cart (locked by first item)
  openCheckout: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const currency = items[0]?.currency ?? null;

  const add = (item: CartItem) => {
    // lock cart currency to first item
    if (currency && currency !== item.currency) {
      alert(`Cart currency locked to ${currency}. Remove items to switch.`);
      return;
    }
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === item.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + item.qty };
        return next;
      }
      return [...prev, item];
    });
    setOpen(true);
  };

  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  const openCheckout = () => setOpen(true);

  return (
    <OrderContext.Provider value={{ items, add, remove, clear, total, currency, openCheckout, open, setOpen }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside OrderProvider");
  return ctx;
};
