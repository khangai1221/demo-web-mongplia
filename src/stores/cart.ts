import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  unitPrice: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, qty = 1) =>
        set((s) => {
          const price = p.discountPrice ?? p.price;
          const existing = s.items.find((i) => i.productId === p.id);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.productId === p.id ? { ...i, quantity: i.quantity + qty } : i,
              ),
            };
          }
          return {
            items: [
              ...s.items,
              { productId: p.id, name: p.name, slug: p.slug, image: p.images[0], unitPrice: price, quantity: qty },
            ],
          };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.productId !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          items: s.items.map((i) => (i.productId === id ? { ...i, quantity: Math.max(1, qty) } : i)),
        })),
      clear: () => set({ items: [] }),
      subtotal: () => get().items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
      count: () => get().items.reduce((s, i) => s + i.quantity, 0),
    }),
    { name: "mm-cart" },
  ),
);
