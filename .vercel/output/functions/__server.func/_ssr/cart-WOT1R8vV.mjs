import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useCart, f as formatMNT } from "./router-DXfvEjYF.mjs";
import "../_libs/sonner.mjs";
import { d as ShoppingBag, A as ArrowRight, T as Truck, p as Minus, q as Plus, r as Trash2, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
function CartPage() {
  const {
    items,
    remove,
    setQty,
    subtotal
  } = useCart();
  const sub = subtotal();
  const deliveryFee = sub >= 5e5 ? 0 : sub > 0 ? 15e3 : 0;
  const total = sub + deliveryFee;
  const freeDeliveryRemaining = sub < 5e5 ? 5e5 - sub : 0;
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-9 h-9 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-2", children: "Сагс хоосон байна" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Бүтээгдэхүүн нэмж сагсаа дүүргэнэ үү." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm", children: [
        "Бүтээгдэхүүн үзэх ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-8", children: "Таны сагс" }),
    freeDeliveryRemaining > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20 text-sm flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatMNT(freeDeliveryRemaining) }),
        " үнэтэй бүтээгдэхүүн нэмбэл хүргэлт үнэгүй болно!"
      ] })
    ] }),
    freeDeliveryRemaining === 0 && sub > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 rounded-2xl bg-success/10 border border-success/20 text-sm flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-success shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Хүргэлт үнэгүй! Та 500,000₮-с дээш захиалга хийсэн байна." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
          slug: i.slug
        }, className: "w-24 h-24 rounded-xl bg-secondary/80 overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image, alt: i.name, className: "w-full h-full object-contain p-2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
            slug: i.slug
          }, className: "font-semibold hover:text-primary transition-colors line-clamp-1", children: i.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-0.5", children: formatMNT(i.unitPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border/60 rounded-lg bg-background", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i.productId, i.quantity - 1), className: "w-8 h-8 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-l-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 text-center text-sm font-semibold", children: i.quantity }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i.productId, i.quantity + 1), className: "w-8 h-8 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-r-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: formatMNT(i.unitPrice * i.quantity) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(i.productId), className: "w-9 h-9 rounded-lg grid place-items-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
      ] }, i.productId)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit p-6 rounded-2xl border border-border/60 bg-card sticky top-28 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold mb-2", children: "Захиалгын дүн" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Дэд дүн" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatMNT(sub) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Хүргэлтийн төлбөр" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: deliveryFee === 0 ? "Үнэгүй" : formatMNT(deliveryFee) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 my-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Нийт төлбөр" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatMNT(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/checkout", className: "w-full btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm", children: [
            "Захиалга өгөх ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "block text-center text-sm text-muted-foreground hover:text-foreground transition-colors", children: "Үргэлжлүүлэн худалдан авах" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
          "Аюулгүй төлбөр"
        ] })
      ] })
    ] })
  ] });
}
export {
  CartPage as component
};
