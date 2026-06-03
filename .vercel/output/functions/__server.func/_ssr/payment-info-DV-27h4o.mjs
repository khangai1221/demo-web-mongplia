import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as Building2, j as Wallet, k as Store, l as CreditCard, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function PaymentInfo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-2", children: "Төлбөрийн мэдээлэл" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Бидний хүлээн авдаг төлбөрийн хэлбэрүүд" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 max-w-2xl mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentCard, { icon: Building2, label: "Дансаар шилжүүлэх", desc: "Хаан банк руу шилжүүлэг хийж, баримтаа оруулна.", active: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentCard, { icon: Wallet, label: "Бэлнээр төлөх", desc: "Хүргэлт хүлээн авахдаа бэлнээр төлөх боломжтой.", active: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentCard, { icon: Store, label: "Дэлгүүр дээр төлөх", desc: "Захиалгаа дэлгүүрээс авахдаа төлнө.", active: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentCard, { icon: CreditCard, label: "StorePay / Pocket Zero", desc: "Хуваан төлөх хүсэлт илгээнэ.", badge: "хүсэлт" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentCard, { icon: CreditCard, label: "QPay", desc: "QPay апп ашиглан төлөх.", badge: "удахгүй" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl p-6 rounded-2xl bg-card border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold mb-3", children: "Дансаар шилжүүлэх заавар" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1. Дээрх данс руу захиалгын дүнг шилжүүлнэ." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2. Гүйлгээний утга дээр захиалгын дугаараа бичнэ." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "3. Баримтаа захиалгийн хуудаснаас оруулна." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "4. Баталгаажсаны дараа захиалга боловсруулагдана." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "btn-primary inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm", children: [
        "Дэлгүүрээр аялах ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] })
  ] });
}
function PaymentCard({
  icon: Icon,
  label,
  desc,
  badge,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-2xl border ${active ? "bg-card border-border/60" : "border-border/40 opacity-60"} flex items-start gap-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
        label,
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-warning/20 text-warning-foreground", children: badge })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: desc })
    ] })
  ] });
}
export {
  PaymentInfo as component
};
