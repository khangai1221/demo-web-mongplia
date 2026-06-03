import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as Clock, T as Truck, c as MapPin, h as Check } from "../_libs/lucide-react.mjs";
function DeliveryInfo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-2", children: "Хүргэлтийн мэдээлэл" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Бидний хүргэлтийн нөхцөл, хугацаа" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [{
      icon: Clock,
      t: "Улаанбаатар дотор",
      d: "24 цагт хүргэнэ",
      c: "500,000₮-с дээш захиалга үнэгүй"
    }, {
      icon: Truck,
      t: "Орон нутаг руу",
      d: "3-5 ажлын өдөр",
      c: "Автобус, хувийн тээвэр"
    }, {
      icon: MapPin,
      t: "Дэлгүүрээс авах",
      d: "Захиалга өгсөн өдрөө",
      c: "10:00-19:00 цаг"
    }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-8 h-8 text-primary mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-1", children: item.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: item.d }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary", children: item.c })
    ] }, item.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-4", children: "Хүргэлтийн нөхцөл" }),
      ["Улаанбаатар хот дотор 500,000₮-с дээш захиалга үнэгүй хүргэлттэй.", "500,000₮-с доош захиалгад 15,000₮ хүргэлтийн төлбөртэй.", "Орон нутаг руу 35,000₮ хүргэлтийн төлбөртэй.", "Хүргэлт хийхээс өмнө захиалагчтай холбогдож баталгаажуулна.", "Дэлгүүрээс өөрөө авах бол 10:00-19:00 цагийн хооронд авах боломжтой."].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mt-0.5 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: item })
      ] }, i))
    ] })
  ] });
}
export {
  DeliveryInfo as component
};
