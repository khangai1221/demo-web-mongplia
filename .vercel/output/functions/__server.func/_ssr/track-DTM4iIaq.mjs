import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useOrders, f as formatMNT } from "./router-DXfvEjYF.mjs";
import "../_libs/sonner.mjs";
import { S as Search, n as Package } from "../_libs/lucide-react.mjs";
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
const statusColors = {
  "New": "bg-secondary text-foreground",
  "Pending Payment": "bg-warning/20 text-warning-foreground",
  "Pending Verification": "bg-warning/20 text-warning-foreground",
  "Paid": "bg-success/20 text-success",
  "Processing": "bg-primary/20 text-primary",
  "Ready for Delivery": "bg-primary/20 text-primary",
  "Shipped": "bg-accent/30 text-accent-foreground",
  "Delivered": "bg-success/20 text-success",
  "Completed": "bg-success/20 text-success",
  "Cancelled": "bg-destructive/20 text-destructive"
};
const statusMn = {
  "New": "Шинэ",
  "Pending Payment": "Төлбөр хүлээгдэж буй",
  "Pending Verification": "Баталгаажуулалт хүлээгдэж буй",
  "Paid": "Төлөгдсөн",
  "Processing": "Бэлтгэгдэж буй",
  "Ready for Delivery": "Хүргэлтэнд бэлэн",
  "Shipped": "Хүргэлтэнд гарсан",
  "Delivered": "Хүргэгдсэн",
  "Completed": "Дууссан",
  "Cancelled": "Цуцлагдсан",
  "Unpaid": "Төлөөгүй",
  "Pending": "Хүлээгдэж буй",
  "Proof Uploaded": "Баримт ирсэн",
  "Failed": "Амжилтгүй",
  "Refunded": "Буцаагдсан",
  "Not Started": "Эхлээгүй",
  "Preparing": "Бэлтгэж буй",
  "Ready": "Бэлэн",
  "Delivered ": "Хүргэгдсэн"
};
function TrackPage() {
  const [q, setQ] = reactExports.useState("");
  const findBy = useOrders((s) => s.findBy);
  const [result, setResult] = reactExports.useState(null);
  const onSearch = () => {
    if (!q.trim()) return;
    const o = findBy(q.toUpperCase().startsWith("MM-") ? {
      orderNumber: q
    } : {
      phone: q
    });
    setResult(o ?? null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-2", children: "Захиалга мөшгөх" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Захиалгын дугаар эсвэл утасны дугаараар хайна уу" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), onKeyDown: (e) => e.key === "Enter" && onSearch(), placeholder: "MM-000001 эсвэл 99119911", className: "flex-1 px-4 py-3 rounded-xl border border-border bg-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSearch, className: "px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
        " Хайх"
      ] })
    ] }),
    result === null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-muted-foreground", children: "Захиалга олдсонгүй." }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Захиалгын дугаар" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold", children: result.orderNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: new Date(result.createdAt).toLocaleString("mn-MN") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: formatMNT(result.total) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { title: "Захиалгын төлөв", value: statusMn[result.orderStatus] ?? result.orderStatus, className: statusColors[result.orderStatus] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { title: "Төлбөрийн төлөв", value: statusMn[result.paymentStatus] ?? result.paymentStatus, className: statusColors[result.paymentStatus] ?? "bg-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { title: "Хүргэлтийн төлөв", value: statusMn[result.deliveryStatus] ?? result.deliveryStatus, className: statusColors[result.deliveryStatus] ?? "bg-secondary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
          " Бүтээгдэхүүн"
        ] }),
        result.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            i.name,
            " × ",
            i.quantity
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatMNT(i.unitPrice * i.quantity) })
        ] }, i.productId))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/order/$orderNumber", params: {
        orderNumber: result.orderNumber
      }, className: "block text-center text-primary underline", children: "Дэлгэрэнгүй харах" })
    ] })
  ] });
}
function StatusCard({
  title,
  value,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block px-2 py-1 rounded-md text-xs font-semibold ${className}`, children: value })
  ] });
}
export {
  TrackPage as component
};
