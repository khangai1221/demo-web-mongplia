import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingCart, Search, Menu, X, Zap, User, Heart } from "lucide-react";
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
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-xs text-center py-2 px-4 font-medium">
        <span className="inline-flex items-center gap-1.5">
          <Zap className="w-3 h-3" fill="currentColor" />
          Free shipping in Ulaanbaatar on orders over 500,000₮
        </span>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary grid place-items-center transition-transform group-hover:scale-105">
              <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="font-display font-bold text-xl tracking-tight leading-none text-gray-900">
              MINI <span className="text-primary">MOTORS</span>
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
                      ? "text-primary bg-primary/10"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button className="hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
              <Search className="w-4.5 h-4.5" />
            </button>
            <button className="hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
              <User className="w-4.5 h-4.5" />
            </button>
            <button className="hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
              <Heart className="w-4.5 h-4.5" />
            </button>
            <Link
              to="/cart"
              className="relative w-9 h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400"
            >
              {open ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-b border-gray-200 overflow-hidden bg-white"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
              {nav.map((n) => {
                const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
                return (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active ? "text-primary bg-primary/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
