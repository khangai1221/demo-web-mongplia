import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$4, g as getRelatedProducts, a as useCart, f as formatMNT, P as ProductCard } from "./router-DXfvEjYF.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as Battery, G as Gauge, R as Ruler, Z as Zap, J as Weight, o as Clock, p as Minus, q as Plus, a as ShoppingCart, i as Building2, j as Wallet, l as CreditCard, T as Truck, h as Check, s as ShieldCheck } from "../_libs/lucide-react.mjs";
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
function ProductPage() {
  const {
    product
  } = Route$4.useLoaderData();
  const related = getRelatedProducts(product);
  const add = useCart((s) => s.add);
  const [qty, setQty] = reactExports.useState(1);
  const [selectedImage, setSelectedImage] = reactExports.useState(0);
  const router = useRouter();
  const price = product.discountPrice ?? product.price;
  const hasDiscount = !!product.discountPrice;
  const onAdd = () => {
    add(product, qty);
    toast.success(`${product.name} × ${qty} сагсанд нэмэгдлээ`);
  };
  const onBuy = () => {
    add(product, qty);
    router.navigate({
      to: "/checkout"
    });
  };
  const specRows = [{
    icon: Battery,
    label: "Батерей",
    value: product.battery
  }, {
    icon: Gauge,
    label: "Дээд хурд",
    value: product.maxSpeed ? `${product.maxSpeed} км/ц` : "-"
  }, {
    icon: Ruler,
    label: "Явах зай",
    value: product.rangeKm ? `${product.rangeKm} км` : "-"
  }, {
    icon: Zap,
    label: "Мотор",
    value: product.motorPower
  }, {
    icon: Weight,
    label: "Жин",
    value: product.weight
  }, {
    icon: Clock,
    label: "Цэнэглэх хугацаа",
    value: product.chargingTime
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-foreground transition-colors", children: "Дэлгүүр" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-secondary/80 to-background rounded-3xl p-8 md:p-12 border border-border/60 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[selectedImage], alt: product.name, width: 800, height: 800, className: "w-full max-w-md mx-auto object-contain" }) }),
        product.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: product.images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedImage(i), className: `w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${selectedImage === i ? "border-primary shadow-glow" : "border-border/60 hover:border-primary/40"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "", className: "w-full h-full object-contain bg-secondary/50 p-2" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-3", children: product.categoryName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-4", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl font-bold text-primary", children: formatMNT(price) }),
          hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground line-through text-lg", children: formatMNT(product.price) }),
          hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground", children: [
            "-",
            Math.round((product.price - product.discountPrice) / product.price * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-5", children: product.stock > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-success animate-pulse" }),
          " Нөөцөд (",
          product.stock,
          "ш)"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-medium", children: "Дууссан" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed", children: product.shortDescription }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8", children: specRows.map((s) => s.value !== "-" && s.value !== "0 км" && s.value && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: s.value })
          ] })
        ] }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Тоо ширхэг" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border/60 rounded-xl bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(Math.max(1, qty - 1)), className: "w-10 h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-l-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 text-center font-semibold", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(qty + 1), className: "w-10 h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-r-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onAdd, disabled: product.stock <= 0, className: "flex-1 min-w-[200px] btn-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
            " Сагсанд нэмэх"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBuy, disabled: product.stock <= 0, className: "flex-1 min-w-[200px] btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed", children: "Шууд худалдаж авах" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Төлбөрийн хэлбэрүүд" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBadge, { icon: Building2, label: "Дансаар шилжүүлэх" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBadge, { icon: Wallet, label: "StorePay хүсэлт", badge: "хүсэлт" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBadge, { icon: Wallet, label: "Pocket Zero хүсэлт", badge: "хүсэлт" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentBadge, { icon: CreditCard, label: "QPay", badge: "удахгүй" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-4", children: "Дэлгэрэнгүй мэдээлэл" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: product.fullDescription })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-4", children: "Техникийн үзүүлэлт" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border/60 overflow-hidden max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [["Загвар", product.name], ["Ангилал", product.categoryName], ["Моторын хүчин чадал", product.motorPower], ["Батерей", product.battery], ["Нэг цэнэглэлтээр явах зай", product.rangeKm ? `${product.rangeKm} км` : "-"], ["Дээд хурд", product.maxSpeed ? `${product.maxSpeed} км/ц` : "-"], ["Даац", product.loadCapacity], ["Жин", product.weight], ["Цэнэглэх хугацаа", product.chargingTime], ["Баталгаат хугацаа", product.warranty]].map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-card" : "bg-transparent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground w-2/5 border-r border-border/40", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: v })
      ] }, k)) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid md:grid-cols-2 gap-4 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Хүргэлтийн мэдээлэл" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Улаанбаатар дотор 24 цаг"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Орон нутаг 3-5 хоног"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Дэлгүүрээс авах боломжтой"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Баталгаа" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Албан ёсны баталгаа: ",
            product.warranty
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Батерейны тусдаа баталгаа"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-primary" }),
            " Буцаах боломжтой"
          ] })
        ] })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-6", children: "Холбоотой бүтээгдэхүүн" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
    ] })
  ] });
}
function PaymentBadge({
  icon: Icon,
  label,
  badge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2.5 rounded-xl bg-background border border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: label }),
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-warning/20 text-warning-foreground ml-auto", children: badge })
  ] });
}
export {
  ProductPage as component
};
