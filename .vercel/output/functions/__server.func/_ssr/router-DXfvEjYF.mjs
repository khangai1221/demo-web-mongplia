import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { Z as Zap, S as Search, U as User, H as Heart, a as ShoppingCart, X, M as Menu, P as Phone, b as Mail, c as MapPin, F as Facebook, I as Instagram, B as Bike, d as ShoppingBag, W as Wrench, e as Baby, f as Settings2, g as SlidersHorizontal, C as ChevronDown, h as Check, i as Building2, j as Wallet, k as Store, l as CreditCard, A as ArrowRight, E as Eye, m as Battery, G as Gauge } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, e as enumType, s as stringType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-WWfJdSnF.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, qty = 1) => set((s) => {
        const price = p.discountPrice ?? p.price;
        const existing = s.items.find((i) => i.productId === p.id);
        if (existing) {
          return {
            items: s.items.map(
              (i) => i.productId === p.id ? { ...i, quantity: i.quantity + qty } : i
            )
          };
        }
        return {
          items: [
            ...s.items,
            { productId: p.id, name: p.name, slug: p.slug, image: p.images[0], unitPrice: price, quantity: qty }
          ]
        };
      }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.productId !== id) })),
      setQty: (id, qty) => set((s) => ({
        items: s.items.map((i) => i.productId === id ? { ...i, quantity: Math.max(1, qty) } : i)
      })),
      clear: () => set({ items: [] }),
      subtotal: () => get().items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
      count: () => get().items.reduce((s, i) => s + i.quantity, 0)
    }),
    { name: "mm-cart" }
  )
);
const nav = [
  { to: "/", label: "Нүүр" },
  { to: "/products", label: "Дэлгүүр" },
  { to: "/delivery", label: "Засвар үйлчилгээ" },
  { to: "/contact", label: "Холбоо барих" }
];
function Header() {
  const count = useCart((s) => s.count());
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary text-primary-foreground text-xs text-center py-2 px-4 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3", fill: "currentColor" }),
      "Free shipping in Ulaanbaatar on orders over 500,000₮"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary grid place-items-center transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary-foreground", fill: "currentColor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-xl tracking-tight leading-none text-gray-900", children: [
          "MINI ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "MOTORS" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-0.5", children: nav.map((n) => {
        const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${active ? "text-primary bg-primary/10" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,
            children: n.label
          },
          n.label
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4.5 h-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4.5 h-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:grid w-9 h-9 rounded-lg place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4.5 h-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/cart",
            className: "relative w-9 h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4.5 h-4.5" }),
              count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full grid place-items-center", children: count })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(!open),
            className: "lg:hidden w-9 h-9 rounded-lg grid place-items-center hover:bg-gray-100 transition-colors text-gray-400",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4.5 h-4.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-4.5 h-4.5" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "lg:hidden border-b border-gray-200 overflow-hidden bg-white",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-3 flex flex-col gap-0.5", children: nav.map((n) => {
          const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? "text-primary bg-primary/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,
              children: n.label
            },
            n.label
          );
        }) })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-secondary/30 mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary-foreground", fill: "currentColor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-lg", children: [
            "Mini",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: " Motors" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Mini Motors — цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн онлайн дэлгүүр." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3 text-sm", children: "Дэлгүүр" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-foreground", children: "Бүх бүтээгдэхүүн" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/categories", className: "hover:text-foreground", children: "Ангилал" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/track", className: "hover:text-foreground", children: "Захиалга мөшгөх" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3 text-sm", children: "Тусламж" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Холбоо барих" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/payment-info", className: "hover:text-foreground", children: "Төлбөрийн мэдээлэл" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/delivery", className: "hover:text-foreground", children: "Хүргэлт" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3 text-sm", children: "Холбоо барих" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            " +976 XXXXXXXX"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
            " info@minimotors.mn"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
            " Улаанбаатар хот"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-5 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mini Motors. Бүх эрх хуулиар хамгаалагдсан."
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mini Motors — Цахилгаан унааны онлайн дэлгүүр" },
      { name: "description", content: "Mini Motors: цахилгаан дугуй, скүүтер, сэлбэг, дагалдах хэрэгслийн Монголын онлайн дэлгүүр." },
      { property: "og:title", content: "Mini Motors — Цахилгаан унааны шинэ үе" },
      { property: "og:description", content: "Цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн онлайн дэлгүүр." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "mn", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
const $$splitComponentImporter$9 = () => import("./track-DTM4iIaq.mjs");
const Route$e = createFileRoute("/track")({
  head: () => ({
    meta: [{
      title: "Захиалга мөшгөх — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./payment-info-DV-27h4o.mjs");
const Route$d = createFileRoute("/payment-info")({
  head: () => ({
    meta: [{
      title: "Төлбөрийн мэдээлэл — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./delivery-VlN9lReC.mjs");
const Route$c = createFileRoute("/delivery")({
  head: () => ({
    meta: [{
      title: "Хүргэлт — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-Bn8Fb_e_.mjs");
const Route$b = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Холбоо барих — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const useOrders = create()(
  persist(
    (set, get) => ({
      orders: [],
      add: (o) => set((s) => ({ orders: [o, ...s.orders] })),
      attachProof: (orderNumber, fileName) => set((s) => ({
        orders: s.orders.map(
          (o) => o.orderNumber === orderNumber ? { ...o, proofFileName: fileName, paymentStatus: "Proof Uploaded", orderStatus: "Pending Verification" } : o
        )
      })),
      findBy: ({ orderNumber, phone }) => get().orders.find(
        (o) => orderNumber && o.orderNumber.toLowerCase() === orderNumber.toLowerCase() || phone && o.customerPhone === phone
      )
    }),
    { name: "mm-orders" }
  )
);
const formatMNT = (amount) => new Intl.NumberFormat("mn-MN").format(amount) + "₮";
const generateOrderNumber = () => {
  const n = Math.floor(Math.random() * 999999) + 1;
  return "MM-" + n.toString().padStart(6, "0");
};
const Route$a = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Захиалга баталгаажуулах — Mini Motors" }] }),
  component: CheckoutPage
});
const schema = objectType({
  customerName: stringType().min(2, "Овог нэрээ оруулна уу"),
  customerPhone: stringType().min(8, "Утасны дугаар буруу"),
  customerEmail: stringType().email("Имэйл буруу").or(literalType("")),
  city: stringType().min(2, "Хот/аймгаа оруулна уу"),
  district: stringType().min(2, "Дүүрэг/сумаа оруулна уу"),
  address: stringType().min(3, "Хаягаа оруулна уу"),
  customerNote: stringType().optional(),
  deliveryMethod: stringType(),
  paymentMethod: stringType()
});
const deliveryOptions = [
  { id: "ub", label: "Улаанбаатар хот дотор хүргэлт", fee: 15e3 },
  { id: "country", label: "Орон нутаг руу хүргэлт", fee: 35e3 },
  { id: "pickup", label: "Дэлгүүрээс өөрөө авах", fee: 0 }
];
const paymentOptions = [
  { id: "manual_bank", label: "Дансаар шилжүүлэх", icon: Building2 },
  { id: "cash", label: "Бэлнээр төлөх (хүргэлтэнд)", icon: Wallet },
  { id: "store_pickup_payment", label: "Дэлгүүр дээр төлөх", icon: Store },
  { id: "storepay_request", label: "StorePay-р хуваан төлөх", icon: CreditCard, badge: "хүсэлт" },
  {
    id: "pocket_zero_request",
    label: "Pocket Zero-р хуваан төлөх",
    icon: CreditCard,
    badge: "хүсэлт"
  },
  { id: "qpay", label: "QPay-р төлөх", icon: CreditCard, badge: "удахгүй", disabled: true }
];
const steps = ["Захиалгын мэдээлэл", "Хүргэлтийн мэдээлэл", "Төлбөрийн хэлбэр", "Баталгаажуулах"];
function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const addOrder = useOrders((s) => s.add);
  const router2 = useRouter();
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    city: "Улаанбаатар",
    district: "",
    address: "",
    customerNote: "",
    deliveryMethod: deliveryOptions[0].id,
    paymentMethod: "manual_bank",
    registerNumber: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const sub = subtotal();
  const delivery = deliveryOptions.find((d) => d.id === form.deliveryMethod);
  const total = sub + delivery.fee;
  const freeDeliveryRemaining = sub < 5e5 ? 5e5 - sub : 0;
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-muted-foreground", children: "Сагс хоосон байна." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "btn-primary px-6 py-3 text-sm", children: "Бүтээгдэхүүн үзэх" })
    ] });
  }
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const validateStep = () => {
    if (step === 0) {
      const r = schema.pick({ customerName: true, customerPhone: true, customerEmail: true }).safeParse(form);
      if (!r.success) {
        const errs = {};
        r.error.issues.forEach((i) => errs[i.path[0]] = i.message);
        setErrors(errs);
        return false;
      }
    }
    if (step === 1) {
      const r = schema.pick({ city: true, district: true, address: true }).safeParse(form);
      if (!r.success) {
        const errs = {};
        r.error.issues.forEach((i) => errs[i.path[0]] = i.message);
        setErrors(errs);
        return false;
      }
    }
    setErrors({});
    return true;
  };
  const onSubmit = () => {
    const orderNumber = generateOrderNumber();
    addOrder({
      id: orderNumber,
      orderNumber,
      customerName: form.customerName,
      customerPhone: form.customerPhone,
      customerEmail: form.customerEmail,
      city: form.city,
      district: form.district,
      address: form.address,
      customerNote: form.customerNote,
      deliveryMethod: delivery.label,
      deliveryFee: delivery.fee,
      items: [...items],
      subtotal: sub,
      total,
      paymentMethod: form.paymentMethod,
      paymentStatus: form.paymentMethod === "qpay" ? "Pending" : "Unpaid",
      orderStatus: "New",
      deliveryStatus: "Not Started",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    clear();
    toast.success("Захиалга амжилттай үүслээ");
    router2.navigate({ to: "/order/$orderNumber", params: { orderNumber } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-2", children: "Захиалга баталгаажуулах" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 my-8 overflow-x-auto pb-2", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-8 h-8 rounded-full grid place-items-center text-sm font-bold transition-all ${i <= step ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border/60"}`,
          children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : i + 1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${i === step ? "font-semibold" : "text-muted-foreground"}`, children: s }),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-px bg-border/60" })
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Захиалгын мэдээлэл", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Овог нэр", error: errors.customerName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.customerName,
              onChange: (e) => update("customerName", e.target.value),
              className: "input-field",
              placeholder: "Овог нэр"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Утасны дугаар", error: errors.customerPhone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.customerPhone,
              onChange: (e) => update("customerPhone", e.target.value),
              className: "input-field",
              placeholder: "99119911"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Имэйл (заавал биш)", error: errors.customerEmail, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.customerEmail,
              onChange: (e) => update("customerEmail", e.target.value),
              className: "input-field",
              placeholder: "you@example.com"
            }
          ) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Хүргэлтийн мэдээлэл", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Хот / аймаг", error: errors.city, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: form.city,
                onChange: (e) => update("city", e.target.value),
                className: "input-field"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Дүүрэг / сум", error: errors.district, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: form.district,
                onChange: (e) => update("district", e.target.value),
                className: "input-field"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Хаяг", error: errors.address, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.address,
              onChange: (e) => update("address", e.target.value),
              className: "input-field",
              placeholder: "Байр, тоот, гудамж"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Нэмэлт тайлбар", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: form.customerNote,
              onChange: (e) => update("customerNote", e.target.value),
              className: "input-field min-h-[80px]",
              placeholder: "Хүргэлтийн нэмэлт мэдээлэл..."
            }
          ) }),
          freeDeliveryRemaining > 0 && sub < 5e5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: formatMNT(freeDeliveryRemaining) }),
            " үнэтэй бүтээгдэхүүн нэмбэл хүргэлт үнэгүй."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Хүргэлтийн төрөл", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: deliveryOptions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: `flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${form.deliveryMethod === d.id ? "border-primary bg-primary/5" : "border-border/60 hover:border-primary/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "radio",
                      checked: form.deliveryMethod === d.id,
                      onChange: () => update("deliveryMethod", d.id),
                      className: "accent-primary"
                    }
                  ),
                  d.label
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: d.fee ? formatMNT(d.fee) : "Үнэгүй" })
              ]
            },
            d.id
          )) }) })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Төлбөрийн хэлбэр", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: paymentOptions.map((p) => {
            const Icon = p.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: `flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${p.disabled ? "opacity-50 cursor-not-allowed" : ""} ${form.paymentMethod === p.id ? "border-primary bg-primary/5" : "border-border/60 hover:border-primary/30"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "radio",
                        disabled: p.disabled,
                        checked: form.paymentMethod === p.id,
                        onChange: () => !p.disabled && update("paymentMethod", p.id),
                        className: "accent-primary"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.label })
                  ] }),
                  p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-warning/20 text-warning-foreground uppercase", children: p.badge })
                ]
              },
              p.id
            );
          }) }),
          (form.paymentMethod === "storepay_request" || form.paymentMethod === "pocket_zero_request") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-xl bg-warning/10 border border-warning/30 text-sm", children: [
            "Таны хүсэлтийг бид хүлээн авлаа. Манай ажилтан тантай холбогдож хуваан төлөх нөхцөлийг баталгаажуулна.",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Регистрийн дугаар (заавал биш)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: form.registerNumber,
                onChange: (e) => update("registerNumber", e.target.value),
                className: "input-field mt-2"
              }
            ) })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Баталгаажуулах", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Захиалагч", value: `${form.customerName} • ${form.customerPhone}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Summary,
              {
                label: "Хүргэх хаяг",
                value: `${form.city}, ${form.district}, ${form.address}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { label: "Хүргэлт", value: delivery.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Summary,
              {
                label: "Төлбөр",
                value: paymentOptions.find((p) => p.id === form.paymentMethod)?.label ?? ""
              }
            )
          ] }),
          form.paymentMethod === "manual_bank" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mb-2", children: "Дансны мэдээлэл:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Банк: Хаан банк" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Дансны дугаар: XXXXXXXX" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Данс эзэмшигч: Mini Motors" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setStep(Math.max(0, step - 1)),
              disabled: step === 0,
              className: "btn-outline px-5 py-3 text-sm font-medium disabled:opacity-40",
              children: "Буцах"
            }
          ),
          step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => validateStep() && setStep(step + 1),
              className: "btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm",
              children: [
                "Үргэлжлүүлэх ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSubmit, className: "btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm", children: "Захиалга баталгаажуулах" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit p-6 rounded-2xl border border-border/60 bg-card sticky top-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-4", children: "Захиалга" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4 max-h-60 overflow-y-auto", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: i.image,
              alt: i.name,
              className: "w-12 h-12 rounded-lg bg-secondary/80 object-contain"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium line-clamp-1", children: i.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              i.quantity,
              " × ",
              formatMNT(i.unitPrice)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold shrink-0", children: formatMNT(i.unitPrice * i.quantity) })
        ] }, i.productId)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Дэд дүн", value: formatMNT(sub) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Хүргэлт", value: delivery.fee ? formatMNT(delivery.fee) : "Үнэгүй" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display text-lg font-bold pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Нийт" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatMNT(total) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Card({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border/60 bg-card space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: title }),
    children
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-1.5", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive mt-1", children: error })
  ] });
}
function Summary({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground w-32 shrink-0", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: value })
  ] });
}
function SummaryRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
const $$splitComponentImporter$5 = () => import("./categories-Dk9zUWuW.mjs");
const Route$9 = createFileRoute("/categories")({
  head: () => ({
    meta: [{
      title: "Ангилал — Mini Motors"
    }, {
      name: "description",
      content: "Mini Motors-ийн бүтээгдэхүүний ангилалууд."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-WOT1R8vV.mjs");
const Route$8 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Сагс — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-BG7UNfS-.mjs");
const Route$7 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Админ — Mini Motors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BnSAFlUB.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mini Motors — Цахилгаан унааны шинэ үе"
    }, {
      name: "description",
      content: "Цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн Монголын онлайн дэлгүүр."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const ebike1 = "/assets/product-ebike-1-DR5DPRuJ.jpg";
const ebike2 = "/assets/product-ebike-2-CGdeHJiz.jpg";
const scooter1 = "/assets/product-scooter-1-C_Iz7vTc.jpg";
const scooter2 = "/assets/product-scooter-2-BoIkBWUQ.jpg";
const kids = "/assets/product-kids-CPWvvdEh.jpg";
const accessory = "/assets/product-accessory-DHjUud8m.jpg";
const battery = "/assets/product-battery-z3-ELjSe.jpg";
const products = [
  {
    id: "p1",
    slug: "mini-x1-electric-scooter",
    name: "Mini X1 Electric Scooter",
    categorySlug: "tsahilgaan-skuuter",
    categoryName: "Цахилгаан скүүтер",
    brand: "Mini Motors",
    price: 149e4,
    stock: 15,
    shortDescription: "Хотын өдөр тутмын унаанд тохиромжтой",
    fullDescription: "Mini X1 Electric Scooter нь хотын өдөр тутмын зорчилтонд зориулагдсан, авсаархан, хөнгөн, тав тухтай цахилгаан скүүтер юм. Хүчирхэг 350W мотор, 36V батерейгаар 35 км хүртэлх зайг туулах боломжтой. Эвхэгддэг загвар нь тээвэрлэх, хадгалахад хялбар.",
    images: [scooter1, scooter2],
    motorPower: "350W",
    battery: "36V",
    rangeKm: 35,
    maxSpeed: 25,
    loadCapacity: "100 кг",
    weight: "13 кг",
    wheelSize: '8.5"',
    chargingTime: "3-4 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар", "Цагаан"],
    isFeatured: true,
    isNew: true,
    views: 850,
    sold: 42,
    specs: [
      { label: "Явах зай", value: "35 км" },
      { label: "Хурд", value: "25 км/ц" },
      { label: "Батерей", value: "36V" },
      { label: "Мотор", value: "350W" }
    ]
  },
  {
    id: "p2",
    slug: "mini-pro-s2-scooter",
    name: "Mini Pro S2 Scooter",
    categorySlug: "tsahilgaan-skuuter",
    categoryName: "Цахилгаан скүүтер",
    brand: "Mini Motors",
    price: 219e4,
    discountPrice: 199e4,
    stock: 10,
    shortDescription: "Илүү хүчтэй, илүү тав тухтай загвар",
    fullDescription: "Mini Pro S2 нь илүү хүчирхэг 500W мотор, 48V батерейгаар тоноглогдсон, өндөр хурдтай, хол зайд явах чадвартай скүүтер юм. 55 км хүртэлх зайг туулж, 35 км/ц хурдлах чадвартай. Суудалтай загвар нь илүү тав тухтай явах боломжийг олгоно.",
    images: [scooter2, scooter1],
    motorPower: "500W",
    battery: "48V",
    rangeKm: 55,
    maxSpeed: 35,
    loadCapacity: "120 кг",
    weight: "18 кг",
    wheelSize: '10"',
    chargingTime: "4-5 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар", "Саарал"],
    isFeatured: true,
    isBestSeller: true,
    isSale: true,
    views: 2300,
    sold: 156,
    specs: [
      { label: "Явах зай", value: "55 км" },
      { label: "Хурд", value: "35 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "500W" }
    ]
  },
  {
    id: "p3",
    slug: "mini-rider-e-bike",
    name: "Mini Rider E-Bike",
    categorySlug: "tsahilgaan-dugui",
    categoryName: "Цахилгаан дугуй",
    brand: "Mini Motors",
    price: 299e4,
    stock: 8,
    shortDescription: "Цахилгаан дугуйн шинэ үе",
    fullDescription: "Mini Rider E-Bike нь хотын болон хөдөөгийн замд ашиглах боломжтой, өндөр чанартай цахилгаан дугуй юм. 500W мотор, 48V батерейгаар 60 км хүртэлх зайг туулна. Тав тухтай суудал, найдвартай тоормосны системээр тоноглогдсон.",
    images: [ebike1, ebike2],
    motorPower: "500W",
    battery: "48V",
    rangeKm: 60,
    maxSpeed: 32,
    loadCapacity: "130 кг",
    weight: "22 кг",
    wheelSize: '26"',
    chargingTime: "4-5 цаг",
    warranty: "2 жил",
    colorOptions: ["Хар", "Цэнхэр"],
    isFeatured: true,
    isBestSeller: true,
    views: 1800,
    sold: 98,
    specs: [
      { label: "Явах зай", value: "60 км" },
      { label: "Хурд", value: "32 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "500W" }
    ]
  },
  {
    id: "p4",
    slug: "mini-cargo-e-bike",
    name: "Mini Cargo E-Bike",
    categorySlug: "tsahilgaan-dugui",
    categoryName: "Цахилгаан дугуй",
    brand: "Mini Motors",
    price: 349e4,
    discountPrice: 319e4,
    stock: 5,
    shortDescription: "Ачаа болон хүргэлтэд тохиромжтой",
    fullDescription: "Mini Cargo E-Bike нь ачаа тээвэрлэх зориулалттай, хүчирхэг 750W мотортой цахилгаан дугуй юм. 70 км хүртэлх зайг туулж, 150 кг хүртэлх ачааг тээвэрлэх боломжтой. Хүргэлтийн үйлчилгээнд хамгийн тохиромжтой сонголт.",
    images: [ebike2, ebike1],
    motorPower: "750W",
    battery: "48V",
    rangeKm: 70,
    maxSpeed: 30,
    loadCapacity: "150 кг",
    weight: "28 кг",
    wheelSize: '20"',
    chargingTime: "5-6 цаг",
    warranty: "2 жил",
    colorOptions: ["Хар"],
    isFeatured: true,
    isSale: true,
    views: 950,
    sold: 45,
    specs: [
      { label: "Явах зай", value: "70 км" },
      { label: "Хурд", value: "30 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "750W" }
    ]
  },
  {
    id: "p5",
    slug: "mini-kids-electric-ride",
    name: "Mini Kids Electric Ride",
    categorySlug: "huuhdiin-tsahilgaan-unaa",
    categoryName: "Хүүхдийн цахилгаан унаа",
    brand: "Mini Motors",
    price: 89e4,
    stock: 20,
    shortDescription: "Хүүхдийн аюулгүй цахилгаан унаа",
    fullDescription: "Mini Kids Electric Ride нь 6-12 насны хүүхдэд зориулсан, аюулгүй, удаан хурдтай цахилгаан скүүтер юм. 250W мотор, 24V батерейгаар 20 км хүртэлх зайг туулах боломжтой. Аюулгүй байдлыг хангасан загвар.",
    images: [kids],
    motorPower: "250W",
    battery: "24V",
    rangeKm: 20,
    maxSpeed: 15,
    loadCapacity: "50 кг",
    weight: "8 кг",
    wheelSize: '6"',
    chargingTime: "2-3 цаг",
    warranty: "6 сар",
    colorOptions: ["Цэнхэр", "Ягаан"],
    isNew: true,
    views: 420,
    sold: 28,
    specs: [
      { label: "Явах зай", value: "20 км" },
      { label: "Хурд", value: "15 км/ц" },
      { label: "Батерей", value: "24V" },
      { label: "Мотор", value: "250W" }
    ]
  },
  {
    id: "p6",
    slug: "smart-helmet-pro",
    name: "Smart Helmet Pro",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 18e4,
    discountPrice: 15e4,
    stock: 30,
    shortDescription: "LED гэрэлтэй хамгаалалтын дуулга",
    fullDescription: "Smart Helmet Pro нь LED гэрэлтэй, тохируулж болдог, гэрчилгээжсэн хамгаалалтын дуулга юм. Шөнийн цагаар явахад харагдах байдлыг хангах LED гэрэлтэй. Бүх насны хэрэглэгчдэд тохирно.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.6 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар", "Цагаан"],
    isSale: true,
    views: 680,
    sold: 120,
    specs: [
      { label: "Төрөл", value: "Дагалдах хэрэгсэл" },
      { label: "Хэмжээ", value: "Тохируулдаг" },
      { label: "Гэрэл", value: "LED" },
      { label: "Аюулгүй байдал", value: "Гэрчилгээжсэн" }
    ]
  },
  {
    id: "p7",
    slug: "scooter-lock-max",
    name: "Scooter Lock Max",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 85e3,
    stock: 50,
    shortDescription: "Бат бөх хамгаалалтын түгжээ",
    fullDescription: "Scooter Lock Max нь өндөр чанартай гангаар хийгдсэн, бат бөх хамгаалалтын түгжээ юм. Скүүтер болон цахилгаан дугуйндаа хэрэглэхэд тохиромжтой. Хулгайгаас хамгаалах найдвартай шийдэл.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "1.2 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар"],
    views: 320,
    sold: 85,
    specs: [
      { label: "Төрөл", value: "Цоож" },
      { label: "Материал", value: "Ган" },
      { label: "Аюулгүй байдал", value: "Өндөр" },
      { label: "Хэрэглээ", value: "Скүүтер/Дугуй" }
    ]
  },
  {
    id: "p8",
    slug: "fast-charger-48v",
    name: "Fast Charger 48V",
    categorySlug: "selbeg-heregsel",
    categoryName: "Сэлбэг хэрэгсэл",
    brand: "Mini Motors",
    price: 16e4,
    stock: 25,
    shortDescription: "Цахилгаан унааны хурдан цэнэглэгч",
    fullDescription: "Fast Charger 48V нь цахилгаан дугуй болон скүүтерт зориулсан хурдан цэнэглэгч юм. 48V системд тохирсон, аюулгүй хамгаалалттай. Цэнэглэх хугацааг эрс багасгана.",
    images: [battery],
    motorPower: "-",
    battery: "48V",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.8 кг",
    wheelSize: "-",
    chargingTime: "2-3 цаг",
    warranty: "6 сар",
    colorOptions: ["Хар"],
    views: 280,
    sold: 55,
    specs: [
      { label: "Төрөл", value: "Цэнэглэгч" },
      { label: "Вольт", value: "48V" },
      { label: "Хурд", value: "Хурдан цэнэглэлт" },
      { label: "Хэрэглээ", value: "Дугуй/Скүүтер" }
    ]
  },
  {
    id: "p9",
    slug: "mini-battery-pack",
    name: "Mini Battery Pack",
    categorySlug: "selbeg-heregsel",
    categoryName: "Сэлбэг хэрэгсэл",
    brand: "Mini Motors",
    price: 59e4,
    discountPrice: 52e4,
    stock: 7,
    shortDescription: "Нэмэлт батерей",
    fullDescription: "Mini Battery Pack нь 48V 15Ah литиум-ион нэмэлт батерей юм. Таны цахилгаан унааны явах зайг +35 км-ээр нэмэгдүүлэх боломжтой. Хурдан солих загвар.",
    images: [battery],
    motorPower: "-",
    battery: "48V 15Ah",
    rangeKm: 35,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "3.5 кг",
    wheelSize: "-",
    chargingTime: "4 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар"],
    isSale: true,
    views: 190,
    sold: 35,
    specs: [
      { label: "Төрөл", value: "Батерей" },
      { label: "Вольт", value: "48V" },
      { label: "Багтаамж", value: "15Ah" },
      { label: "Зай нэмэгдүүлэлт", value: "+35 км" }
    ]
  },
  {
    id: "p10",
    slug: "urban-rider-gloves",
    name: "Urban Rider Gloves",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 65e3,
    stock: 40,
    shortDescription: "Унааны хамгаалалтын бээлий",
    fullDescription: "Urban Rider Gloves нь өдөр тутмын унаанд зориулсан, удаан эдэлгээтэй, гулсалтаас хамгаалах атгагчтай бээлий юм. Салхи үл нэвтрүүлэх материал, тав тухтай тохируулга.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.2 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар", "Саарал"],
    views: 150,
    sold: 65,
    specs: [
      { label: "Төрөл", value: "Дагалдах хэрэгсэл" },
      { label: "Материал", value: "Удаан эдэлгээтэй" },
      { label: "Атгагч", value: "Гулсалтаас хамгаалах" },
      { label: "Хэрэглээ", value: "Өдөр тутмын" }
    ]
  }
];
const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
const getRelatedProducts = (p) => products.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);
const categories = [
  { id: "1", slug: "tsahilgaan-skuuter", name: "Цахилгаан скүүтер", description: "Дугуйтай болон суудалтай скүүтер", icon: Zap },
  { id: "2", slug: "tsahilgaan-dugui", name: "Цахилгаан дугуй", description: "Хотын болон уулын цахилгаан дугуй", icon: Bike },
  { id: "3", slug: "dagaldah-heregsel", name: "Дагалдах хэрэгсэл", description: "Дуулга, цоож, гэрэл", icon: ShoppingBag },
  { id: "4", slug: "selbeg-heregsel", name: "Сэлбэг хэрэгсэл", description: "Батерей, цэнэглэгч, сэлбэг", icon: Wrench },
  { id: "5", slug: "huuhdiin-tsahilgaan-unaa", name: "Хүүхдийн цахилгаан унаа", description: "Хүүхдэд зориулсан", icon: Baby },
  { id: "6", slug: "zasvar-uilchilgee", name: "Засвар үйлчилгээ", description: "Мэргэжлийн засвар", icon: Settings2 }
];
function ProductCard({ product, index = 0 }) {
  const add = useCart((s) => s.add);
  const price = product.discountPrice ?? product.price;
  const hasDiscount = !!product.discountPrice;
  const outOfStock = product.stock <= 0;
  const [hovered, setHovered] = reactExports.useState(false);
  const discountPercent = hasDiscount ? Math.round((product.price - product.discountPrice) / product.price * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: Math.min(index * 0.05, 0.3) },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      className: "group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 glow-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: { slug: product.slug }, className: "block relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-gradient-to-br from-secondary/80 to-background overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.images[0],
              alt: product.name,
              loading: "lazy",
              className: "w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
            product.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 text-[10px] font-bold rounded-full bg-primary text-primary-foreground tracking-wide", children: "NEW" }),
            hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground tracking-wide", children: [
              "SALE -",
              discountPercent,
              "%"
            ] }),
            product.isBestSeller && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-500/90 text-black tracking-wide", children: "BEST" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
                "Quick View"
              ] })
            }
          ),
          outOfStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70 grid place-items-center backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold", children: "Дууссан" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-5 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-1", children: product.categoryName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products/$slug",
                params: { slug: product.slug },
                className: "font-semibold leading-tight hover:text-primary transition-colors line-clamp-1 text-sm md:text-base",
                children: product.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mt-1 line-clamp-1", children: product.shortDescription })
          ] }),
          product.specs && product.specs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-medium",
              children: [
                spec.label === "Явах зай" && /* @__PURE__ */ jsxRuntimeExports.jsx(Battery, { className: "w-2.5 h-2.5" }),
                spec.label === "Хурд" && /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-2.5 h-2.5" }),
                spec.label === "Мотор" && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-2.5 h-2.5" }),
                spec.label === "Батерей" && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-2.5 h-2.5" }),
                !["Явах зай", "Хурд", "Мотор", "Батерей"].includes(spec.label) && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-2.5 h-2.5" }),
                spec.label === "Явах зай" ? spec.value : spec.value
              ]
            },
            spec.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-2 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/50 line-through", children: formatMNT(product.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg md:text-xl text-foreground", children: formatMNT(price) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  if (outOfStock) return;
                  add(product);
                  toast.success(product.name + " сагсанд нэмэгдлээ");
                },
                disabled: outOfStock,
                className: "w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90 active:scale-95 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
                "aria-label": "Сагсанд нэмэх",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const searchSchema = objectType({
  category: stringType().optional(),
  sort: enumType(["new", "price-asc", "price-desc", "popular", "viewed"]).optional()
});
const Route$5 = createFileRoute("/products/")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Бүтээгдэхүүн — Mini Motors" },
      {
        name: "description",
        content: "Цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн жагсаалт."
      }
    ]
  }),
  component: ProductsPage
});
const sortOptions = [
  { value: "new", label: "Шинэ" },
  { value: "price-asc", label: "Үнэ өсөхөөр" },
  { value: "price-desc", label: "Үнэ буурахаар" },
  { value: "popular", label: "Хамгийн их зарагдсан" },
  { value: "viewed", label: "Хамгийн их үзсэн" }
];
function ProductsPage() {
  const search = Route$5.useSearch();
  const navigate = Route$5.useNavigate();
  const [category, setCategory] = reactExports.useState(search.category ?? "");
  const [sort, setSort] = reactExports.useState(search.sort ?? "new");
  const [maxPrice, setMaxPrice] = reactExports.useState(5e6);
  const [inStock, setInStock] = reactExports.useState(false);
  const [hasDiscount, setHasDiscount] = reactExports.useState(false);
  const [minRange, setMinRange] = reactExports.useState(0);
  const [filterOpen, setFilterOpen] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    let list = products.filter((p) => {
      if (category && p.categorySlug !== category) return false;
      const price = p.discountPrice ?? p.price;
      if (price > maxPrice) return false;
      if (inStock && p.stock <= 0) return false;
      if (hasDiscount && !p.discountPrice) return false;
      if (minRange > 0 && p.rangeKm < minRange) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort(
          (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
        );
        break;
      case "price-desc":
        list = [...list].sort(
          (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
        );
        break;
      case "popular":
        list = [...list].sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));
        break;
      case "viewed":
        list = [...list].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
        break;
    }
    return list;
  }, [category, sort, maxPrice, inStock, hasDiscount, minRange]);
  const updateCategory = (slug) => {
    setCategory(slug);
    navigate({ search: { ...search, category: slug || void 0 } });
  };
  const FiltersPanel = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: "Шүүлтүүр" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Ангилал", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => updateCategory(""),
          className: `block w-full text-left px-3 py-2 rounded-lg text-sm ${!category ? "bg-primary/10 text-primary font-medium" : "hover:bg-white/[0.04]"}`,
          children: "Бүгд"
        }
      ),
      categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => updateCategory(c.slug),
          className: `block w-full text-left px-3 py-2 rounded-lg text-sm ${category === c.slug ? "bg-primary/10 text-primary font-medium" : "hover:bg-white/[0.04]"}`,
          children: c.name
        },
        c.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: `Макс үнэ: ${formatMNT(maxPrice)}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 1e5,
          max: 5e6,
          step: 1e5,
          value: maxPrice,
          onChange: (e) => setMaxPrice(+e.target.value),
          className: "w-full accent-primary"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatMNT(1e5) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatMNT(5e6) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Явах зай", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: 120,
          step: 10,
          value: minRange,
          onChange: (e) => setMinRange(+e.target.value),
          className: "w-full accent-primary"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0 км" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "120 км" })
      ] }),
      minRange > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-primary mt-1", children: [
        "≥ ",
        minRange,
        " км"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { label: "Бусад шүүлтүүр", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 text-sm cursor-pointer px-3 py-2 rounded-lg hover:bg-white/[0.04]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: inStock,
            onChange: (e) => setInStock(e.target.checked),
            className: "accent-primary rounded"
          }
        ),
        "Зөвхөн нөөцтэй"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 text-sm cursor-pointer px-3 py-2 rounded-lg hover:bg-white/[0.04]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: hasDiscount,
            onChange: (e) => setHasDiscount(e.target.checked),
            className: "accent-primary rounded"
          }
        ),
        "Хямдралтай"
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 pt-10 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold", children: "Дэлгүүр" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
          filtered.length,
          " бүтээгдэхүүн"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setFilterOpen(true),
            className: "lg:hidden btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
              " Шүүлтүүр"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: sort,
              onChange: (e) => setSort(e.target.value),
              className: "px-4 py-2 rounded-xl border border-border/60 bg-card text-sm appearance-none pr-8 cursor-pointer focus:border-primary/40 focus:outline-none",
              children: sortOptions.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[280px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-28 p-5 rounded-2xl bg-card border border-border/60", children: FiltersPanel }) }),
      filterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden",
          onClick: () => setFilterOpen(false),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute right-0 top-0 h-full w-80 max-w-full bg-background border-l border-border/60 p-6 overflow-y-auto",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Шүүлтүүр" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setFilterOpen(false),
                      className: "w-8 h-8 rounded-lg grid place-items-center hover:bg-white/[0.06]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  )
                ] }),
                FiltersPanel
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Тохирох бүтээгдэхүүн олдсонгүй." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            search: {},
            className: "btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm",
            children: "Шүүлтүүр цэвэрлэх"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }),
        filtered.length > 9 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-outline px-8 py-3 text-sm font-medium", children: "Цааш үзэх" }) })
      ] }) })
    ] }) })
  ] });
}
function FilterGroup({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 border-b border-border/40 last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mb-3 text-foreground/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children })
  ] });
}
const $$splitNotFoundComponentImporter$1 = () => import("./products._slug-B5ZcKz4s.mjs");
const $$splitErrorComponentImporter = () => import("./products._slug-C5WAapJv.mjs");
const $$splitComponentImporter$1 = () => import("./products._slug-BgOZ1p-5.mjs");
const Route$4 = createFileRoute("/products/$slug")({
  loader: ({
    params
  }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => loaderData ? {
    meta: [{
      title: `${loaderData.product.name} — Mini Motors`
    }, {
      name: "description",
      content: loaderData.product.shortDescription
    }, {
      property: "og:title",
      content: loaderData.product.name
    }, {
      property: "og:description",
      content: loaderData.product.shortDescription
    }, {
      property: "og:image",
      content: loaderData.product.images[0]
    }]
  } : {},
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const $$splitNotFoundComponentImporter = () => import("./order._orderNumber-DZgam4x1.mjs");
const $$splitComponentImporter = () => import("./order._orderNumber-CMTDCLMW.mjs");
const Route$3 = createFileRoute("/order/$orderNumber")({
  loader: ({
    params
  }) => {
    const orders = useOrders.getState().orders;
    const order = orders.find((o) => o.orderNumber === params.orderNumber);
    if (!order) throw notFound();
    return {
      order
    };
  },
  head: ({
    loaderData
  }) => loaderData ? {
    meta: [{
      title: `Захиалга ${loaderData.order.orderNumber} — Mini Motors`
    }]
  } : {},
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const notReady$2 = () => new Response(JSON.stringify({ ok: false, message: "Integration not activated yet." }), {
  status: 200,
  headers: { "Content-Type": "application/json" }
});
const Route$2 = createFileRoute("/api/payment/storepay/$action")({
  server: { handlers: { GET: notReady$2, POST: notReady$2 } }
});
const notReady$1 = () => new Response(JSON.stringify({ ok: false, message: "Integration not activated yet." }), {
  status: 200,
  headers: { "Content-Type": "application/json" }
});
const Route$1 = createFileRoute("/api/payment/qpay/$action")({
  server: {
    handlers: {
      GET: notReady$1,
      POST: notReady$1
    }
  }
});
const notReady = () => new Response(JSON.stringify({ ok: false, message: "Integration not activated yet." }), {
  status: 200,
  headers: { "Content-Type": "application/json" }
});
const Route = createFileRoute("/api/payment/pocket-zero/$action")({
  server: { handlers: { GET: notReady, POST: notReady } }
});
const TrackRoute = Route$e.update({
  id: "/track",
  path: "/track",
  getParentRoute: () => Route$f
});
const PaymentInfoRoute = Route$d.update({
  id: "/payment-info",
  path: "/payment-info",
  getParentRoute: () => Route$f
});
const DeliveryRoute = Route$c.update({
  id: "/delivery",
  path: "/delivery",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const CheckoutRoute = Route$a.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$f
});
const CategoriesRoute = Route$9.update({
  id: "/categories",
  path: "/categories",
  getParentRoute: () => Route$f
});
const CartRoute = Route$8.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$f
});
const AdminRoute = Route$7.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ProductsIndexRoute = Route$5.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$f
});
const ProductsSlugRoute = Route$4.update({
  id: "/products/$slug",
  path: "/products/$slug",
  getParentRoute: () => Route$f
});
const OrderOrderNumberRoute = Route$3.update({
  id: "/order/$orderNumber",
  path: "/order/$orderNumber",
  getParentRoute: () => Route$f
});
const ApiPaymentStorepayActionRoute = Route$2.update({
  id: "/api/payment/storepay/$action",
  path: "/api/payment/storepay/$action",
  getParentRoute: () => Route$f
});
const ApiPaymentQpayActionRoute = Route$1.update({
  id: "/api/payment/qpay/$action",
  path: "/api/payment/qpay/$action",
  getParentRoute: () => Route$f
});
const ApiPaymentPocketZeroActionRoute = Route.update({
  id: "/api/payment/pocket-zero/$action",
  path: "/api/payment/pocket-zero/$action",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  CartRoute,
  CategoriesRoute,
  CheckoutRoute,
  ContactRoute,
  DeliveryRoute,
  PaymentInfoRoute,
  TrackRoute,
  OrderOrderNumberRoute,
  ProductsSlugRoute,
  ProductsIndexRoute,
  ApiPaymentPocketZeroActionRoute,
  ApiPaymentQpayActionRoute,
  ApiPaymentStorepayActionRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ProductCard as P,
  Route$4 as R,
  useCart as a,
  Route$3 as b,
  categories as c,
  formatMNT as f,
  getRelatedProducts as g,
  products as p,
  router as r,
  useOrders as u
};
