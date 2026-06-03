import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as products, c as categories, P as ProductCard } from "./router-DXfvEjYF.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { y as Sparkles, A as ArrowRight, Z as Zap, s as ShieldCheck, T as Truck, z as Headphones, i as Building2, j as Wallet, l as CreditCard, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-ebike-DMW9W2hj.jpg";
function Index() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const saleItems = products.filter((p) => p.isSale).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero text-foreground min-h-[80vh] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-neon-glow pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_20%,oklch(0.82_0.22_145/0.3),transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:py-24 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "›" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-foreground transition-colors", children: "All Collections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "›" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/70", children: "Products" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.7
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs font-medium mb-5 text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
              "2026 оны шинэ цуглуулга"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 text-balance", children: [
              "Цахилгаан унааны",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "шинэ үе" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed", children: "Mini Motors — цахилгаан скүүтер, цахилгаан дугуй болон дагалдах хэрэгслийн онлайн дэлгүүр." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm", children: [
                "Бүтээгдэхүүн үзэх ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "btn-outline inline-flex items-center gap-2 px-7 py-3.5 text-sm text-foreground hover:text-primary", children: "Дэлгүүр нээх" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex gap-8", children: [{
              n: "10K+",
              l: "Хэрэглэгч"
            }, {
              n: "200+",
              l: "Бүтээгдэхүүн"
            }, {
              n: "98%",
              l: "Сэтгэл ханамж"
            }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.l })
            ] }, s.l)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.95
          }, animate: {
            opacity: 1,
            scale: 1
          }, transition: {
            duration: 0.8,
            delay: 0.2
          }, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-border shadow-[0_0_80px_oklch(0.82_0.22_145/0.15)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Цахилгаан унаа", width: 1600, height: 1024, className: "w-full h-auto object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 bg-card border border-border/60 rounded-2xl p-4 shadow-elegant backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/20 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: "Шинэ цуглуулга" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "2026 оны загварууд" })
              ] })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Бүтээгдэхүүний ангилал", subtitle: "Цахилгаан унааны бүх төрлийн бүтээгдэхүүн нэг дороос", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: categories.map((c, i) => {
      const Icon = c.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", search: {
        category: c.slug
      }, className: "group flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-glow transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary group-hover:text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm leading-tight", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground/60 mt-1", children: c.description })
      ] }) }, c.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Хямдралтай бүтээгдэхүүн", subtitle: "Хязгаарлагдмал хугацааны тусгай үнэ", link: {
      to: "/products",
      label: "Бүгдийг үзэх"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: saleItems.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold mb-2", children: "Яагаад Mini Motors?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Бидний давуу талууд" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-4", children: [{
        icon: ShieldCheck,
        t: "Албан ёсны баталгаа",
        d: "Бүх бүтээгдэхүүнд 1-2 жилийн баталгаа"
      }, {
        icon: Truck,
        t: "Хурдан хүргэлт",
        d: "УБ дотор 24 цагт, орон нутаг 3-5 хоног"
      }, {
        icon: Headphones,
        t: "24/7 дэмжлэг",
        d: "Утсаар болон чатаар тусална"
      }, {
        icon: Sparkles,
        t: "Чанартай засвар",
        d: "Мэргэжлийн засварчид"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 glow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: f.d })
      ] }, f.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Онцлох бүтээгдэхүүн", subtitle: "2026 оны хамгийн сүүлийн загварууд", link: {
      to: "/products",
      label: "Бүгдийг үзэх"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: featured.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-3xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-4 text-primary", children: "Төлбөрийн төрлүүд" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PayRow, { icon: Building2, label: "Дансаар шилжүүлэх" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PayRow, { icon: Wallet, label: "Бэлнээр төлөх" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PayRow, { icon: CreditCard, label: "StorePay-р хуваан төлөх", badge: "хүсэлт" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PayRow, { icon: CreditCard, label: "Pocket Zero-р хуваан төлөх", badge: "хүсэлт" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PayRow, { icon: CreditCard, label: "QPay", badge: "удахгүй" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-3xl bg-gradient-hero text-foreground border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-4", children: "Хүргэлтийн мэдээлэл" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 mt-0.5 text-primary shrink-0" }),
            "Улаанбаатар хот дотор — 24 цагт"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 mt-0.5 text-primary shrink-0" }),
            "Орон нутаг руу — 3-5 хоног"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 mt-0.5 text-primary shrink-0" }),
            "Дэлгүүрээс өөрөө авах боломжтой"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "btn-primary inline-flex items-center gap-2 mt-6 px-5 py-3 text-sm", children: [
          "Захиалга өгөх ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Шинэ ирсэн", subtitle: "2026 оны хамгийн сүүлийн загварууд", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: newArrivals.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Түгээмэл асуултууд", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { ...f }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-10 md:p-16 bg-gradient-hero text-center border border-border shadow-[0_0_60px_oklch(0.82_0.22_145/0.1)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-3 text-foreground", children: "Цахилгаан унааны мэргэжилтнүүдтэй холбогдоорой" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto mb-6", children: "Танд тохирох цахилгаан унааг сонгоход бид туслана." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm", children: [
        "Холбоо барих ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] });
}
function Section({
  title,
  subtitle,
  link,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4 mb-8 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: subtitle })
      ] }),
      link && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link.to, className: "text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1", children: [
        link.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    children
  ] });
}
function PayRow({
  icon: Icon,
  label,
  badge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between p-3 rounded-xl bg-background border border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }),
      label
    ] }),
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-warning/20 text-warning-foreground", children: badge })
  ] });
}
const faqs = [{
  q: "Бүтээгдэхүүний баталгаат хугацаа хэд вэ?",
  a: "Цахилгаан дугуй, скүүтерт 1-2 жилийн албан ёсны баталгаа олгоно. Батерейд 1 жил."
}, {
  q: "Хүргэлтийн хугацаа?",
  a: "Улаанбаатар хот дотор 24 цагт, орон нутаг руу 3-5 ажлын өдөрт хүргэнэ."
}, {
  q: "Хуваан төлөлт хийх боломжтой юу?",
  a: "StorePay болон Pocket Zero үйлчилгээгээр хуваан төлөх хүсэлт авна. Манай ажилтан тантай холбогдоно."
}, {
  q: "Төлбөр хэрхэн төлөх вэ?",
  a: "Дансаар шилжүүлэх, бэлнээр болон дэлгүүр дээр төлөх боломжтой. QPay удахгүй нэмэгдэнэ."
}];
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 rounded-2xl bg-card overflow-hidden transition-all duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between gap-4 p-5 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 transition ${open ? "rotate-180 text-primary" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground", children: a })
  ] });
}
export {
  Index as component
};
