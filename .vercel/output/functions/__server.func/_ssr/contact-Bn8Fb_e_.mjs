import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, b as Mail, c as MapPin, F as Facebook, I as Instagram } from "../_libs/lucide-react.mjs";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-2", children: "Холбоо барих" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Бид тантай ярилцахдаа баяртай байх болно." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, label: "Утас", value: "+976 XXXXXXXX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, label: "Имэйл", value: "info@minimotors.mn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPin, label: "Хаяг", value: "Улаанбаатар хот, Монгол улс" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Facebook, label: "Facebook", value: "Mini Motors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Instagram, label: "Instagram", value: "minimotors.mn" })
    ] })
  ] });
}
function Info({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl border border-border bg-card flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: value })
    ] })
  ] });
}
export {
  ContactPage as component
};
