import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingCart, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/stores/cart";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/", label: "Нүүр" },
  { to: "/products", label: "Дэлгүүр" },
  { to: "/delivery", label: "Засвар үйлчилгээ" },
  { to: "/contact", label: "Холбоо барих" },
];

export function Header() {
  const count = useCart((s) => s.count());
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gray-950 grid place-items-center transition-transform group-hover:scale-105">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" />
          </div>
          <div className="font-bold text-base sm:text-lg tracking-tight leading-none text-gray-900">
            MINI <span className="text-gray-500">Motors</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.label}
                to={n.to}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <Link
            to="/cart"
            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
          >
            <ShoppingCart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full grid place-items-center">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400"
          >
            {open ? (
              <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-200 overflow-hidden bg-white"
          >
            <div className="container mx-auto px-3 sm:px-4 py-2 flex flex-col gap-0.5">
              {nav.map((n) => {
                const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
                return (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
