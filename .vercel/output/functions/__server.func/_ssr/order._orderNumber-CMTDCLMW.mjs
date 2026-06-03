import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as Route$3, u as useOrders, f as formatMNT } from "./router-DXfvEjYF.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { K as CircleCheckBig, i as Building2, N as Upload, o as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function OrderPage() {
  const {
    order
  } = Route$3.useLoaderData();
  const attachProof = useOrders((s) => s.attachProof);
  const fileInputRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [uploaded, setUploaded] = reactExports.useState(!!order.proofFileName);
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      toast.error("Зөвхөн jpg, png, jpeg, pdf файл хүлээн авна.");
      return;
    }
    setUploading(true);
    setTimeout(() => {
      attachProof(order.orderNumber, file.name);
      setUploaded(true);
      setUploading(false);
      toast.success("Төлбөрийн баримт амжилттай илгээгдлээ");
    }, 1500);
  };
  const isBankTransfer = order.paymentMethod === "manual_bank";
  const isUnpaid = order.paymentStatus === "Unpaid" || order.paymentStatus === "Proof Uploaded";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-success/15 mx-auto grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold mb-2", children: "Захиалга амжилттай бүртгэгдлээ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
        "Захиалгын дугаар:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: order.orderNumber })
      ] })
    ] }),
    isBankTransfer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-card border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold", children: "Дансаар шилжүүлэх заавар" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Та захиалгаа баталгаажуулахын тулд доорх данс руу төлбөрөө шилжүүлнэ үү." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background rounded-xl p-4 border border-border/60 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Банк:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Хаан банк" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Дансны дугаар:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium font-mono", children: "XXXXXXXX" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Данс эзэмшигч:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Mini Motors" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-2 mt-2 flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Гүйлгээний утга:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: order.orderNumber })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-2 mt-2 flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Дүн:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg text-primary", children: formatMNT(order.total) })
        ] })
      ] }),
      isUnpaid && !uploaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-border/60 rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer", onClick: () => fileInputRef.current?.click(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-1", children: "Төлбөрийн баримт оруулах" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "jpg, png, jpeg, pdf файл хүлээн авна" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: ".jpg,.jpeg,.png,.pdf", className: "hidden", onChange: handleUpload, disabled: uploading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }, disabled: uploading, className: "mt-3 btn-outline px-4 py-2 text-xs inline-flex items-center gap-2", children: uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Оруулж байна..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5" }),
          " Баримт оруулах"
        ] }) })
      ] }) }),
      uploaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 p-4 rounded-xl bg-success/10 border border-success/20 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-success shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Баримт хүлээн авсан" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Бид таны баримтыг шалгаж баталгаажуулна." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold mb-4", children: "Захиалгын дэлгэрэнгүй" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Төлөв" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-warning/15 text-warning-foreground text-xs font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              order.paymentStatus === "Proof Uploaded" ? "Баталгаажуулах шатанд" : "Хүлээгдэж байна"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { label: "Захиалагч", value: order.customerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { label: "Утас", value: order.customerPhone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { label: "Хаяг", value: `${order.city}, ${order.district}, ${order.address}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { label: "Хүргэлт", value: order.deliveryMethod }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { label: "Төлбөр", value: order.paymentMethod === "manual_bank" ? "Дансаар шилжүүлэх" : order.paymentMethod })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold mb-4", children: "Бүтээгдэхүүнүүд" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              " × ",
              item.quantity
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatMNT(item.unitPrice * item.quantity) })
        ] }, item.productId)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 mt-4 pt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Дэд дүн" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatMNT(order.subtotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Хүргэлт" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.deliveryFee ? formatMNT(order.deliveryFee) : "Үнэгүй" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display text-lg font-bold pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Нийт" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatMNT(order.total) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm", children: [
        "Үргэлжлүүлэн дэлгүүрэх ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
}
function OrderRow({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
export {
  OrderPage as component
};
