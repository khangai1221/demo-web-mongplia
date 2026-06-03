import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useOrders, p as products, f as formatMNT } from "./router-DXfvEjYF.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LogOut, t as LayoutDashboard, n as Package, u as ListOrdered, a as ShoppingCart, l as CreditCard, v as Users, w as Boxes, T as Truck, x as Settings, D as DollarSign, o as Clock, h as Check, E as Eye } from "../_libs/lucide-react.mjs";
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
const sidebarItems = [{
  id: "dashboard",
  label: "Dashboard",
  icon: LayoutDashboard
}, {
  id: "products",
  label: "Products",
  icon: Package
}, {
  id: "categories",
  label: "Categories",
  icon: ListOrdered
}, {
  id: "orders",
  label: "Orders",
  icon: ShoppingCart
}, {
  id: "payments",
  label: "Payments",
  icon: CreditCard
}, {
  id: "customers",
  label: "Customers",
  icon: Users
}, {
  id: "inventory",
  label: "Inventory",
  icon: Boxes
}, {
  id: "delivery",
  label: "Delivery",
  icon: Truck
}, {
  id: "settings",
  label: "Settings",
  icon: Settings
}];
function AdminDashboard() {
  const [activeTab, setActiveTab] = reactExports.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const {
    orders
  } = useOrders();
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.orderStatus === "New" || o.orderStatus === "Pending Payment").length;
  const totalProducts = products.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-14 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display font-bold text-sm", children: [
          "MINI ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "MOTORS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground bg-card px-2 py-0.5 rounded border border-border/60", children: "Admin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-outline px-3 py-1.5 text-xs inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
        " Logout"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: `${sidebarOpen ? "block" : "hidden"} lg:block w-56 shrink-0 border-r border-border/60 min-h-[calc(100vh-3.5rem)] bg-card/50`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-3 space-y-1", children: sidebarItems.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setActiveTab(item.id);
          setSidebarOpen(false);
        }, className: `w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${activeTab === item.id ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
          item.label
        ] }, item.id);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-4 md:p-6 lg:p-8", children: [
        activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardView, { totalOrders, totalRevenue, pendingOrders, totalProducts, orders }),
        activeTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx(OrdersPanel, { orders }),
        activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsPanel, {}),
        activeTab === "payments" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentsPanel, { orders }),
        activeTab === "delivery" && /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryPanel, { orders }),
        ["categories", "customers", "inventory", "settings"].includes(activeTab) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            activeTab,
            " panel coming soon."
          ] })
        ] })
      ] })
    ] })
  ] });
}
function DashboardView({
  totalOrders,
  totalRevenue,
  pendingOrders,
  totalProducts,
  orders
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-6", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: ShoppingCart, label: "Нийт захиалга", value: totalOrders.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: "Нийт орлого", value: formatMNT(totalRevenue) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Clock, label: "Хүлээгдэж буй", value: pendingOrders.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Package, label: "Бүтээгдэхүүн", value: totalProducts.toString() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border/60 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Сүүлийн захиалгууд" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-muted-foreground text-xs border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалга" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалагч" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлөв" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлбөр" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: "Дүн" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          orders.slice(0, 5).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 hover:bg-white/[0.02]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: o.orderNumber }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: o.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-warning/15 text-warning-foreground", children: o.orderStatus }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${o.paymentStatus === "Paid" ? "bg-success/15 text-success" : o.paymentStatus === "Unpaid" ? "bg-destructive/15 text-destructive" : "bg-warning/15 text-warning-foreground"}`, children: o.paymentStatus }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-medium", children: formatMNT(o.total) })
          ] }, o.id)),
          orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-6 text-center text-muted-foreground text-sm", children: "Захиалга байхгүй байна." }) })
        ] })
      ] }) })
    ] })
  ] });
}
function StatCard({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-card border border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
  ] });
}
function OrdersPanel({
  orders
}) {
  const orderStatuses = ["New", "Pending Payment", "Pending Verification", "Paid", "Processing", "Ready for Delivery", "Shipped", "Delivered", "Completed", "Cancelled"];
  const updateStatus = (orderId, status) => {
    toast.success(`Захиалга ${orderId} → ${status}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-6", children: "Захиалгууд" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-muted-foreground text-xs border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалагч" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Утас" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Бүтээгдэхүүн" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлбөр" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлөв" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Баримт" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: "Дүн" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3 font-medium", children: "Үйлдэл" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 hover:bg-white/[0.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: o.orderNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: o.customerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: o.customerPhone }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-xs", children: [
            o.items.length,
            "ш"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded font-medium ${o.paymentStatus === "Paid" ? "bg-success/15 text-success" : o.paymentStatus === "Unpaid" ? "bg-destructive/15 text-destructive" : "bg-warning/15 text-warning-foreground"}`, children: o.paymentStatus }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: o.orderStatus, onChange: (e) => updateStatus(o.id, e.target.value), className: "text-xs bg-transparent border border-border/60 rounded px-1.5 py-0.5", children: orderStatuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: o.proofFileName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
            " Uploaded"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-medium", children: formatMNT(o.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-xs text-primary hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 inline" }),
            " View"
          ] }) })
        ] }, o.id)),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "p-6 text-center text-muted-foreground text-sm", children: "No orders found." }) })
      ] })
    ] }) }) })
  ] });
}
function ProductsPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-6", children: "Бүтээгдэхүүн" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-muted-foreground text-xs border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Бүтээгдэхүүн" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Ангилал" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Үнэ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Хямдрал" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: "Нөөц" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3 font-medium", children: "Үйлдэл" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 hover:bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: p.categoryName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: formatMNT(p.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: p.discountPrice ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success text-xs", children: formatMNT(p.discountPrice) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "—" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${p.stock <= 5 ? "text-destructive" : "text-success"}`, children: p.stock }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-outline px-3 py-1 text-xs", children: "Edit" }) })
      ] }, p.id)) })
    ] }) }) })
  ] });
}
function PaymentsPanel({
  orders
}) {
  const proofOrders = orders.filter((o) => o.proofFileName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-6", children: "Төлбөр" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-muted-foreground text-xs border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалга" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалагч" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлбөрийн хэлбэр" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлөв" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Баримт" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: "Дүн" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3 font-medium", children: "Төлсөн гэж тэмдэглэх" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        proofOrders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 hover:bg-white/[0.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: o.orderNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: o.customerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-xs", children: o.paymentMethod }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded font-medium ${o.paymentStatus === "Paid" ? "bg-success/15 text-success" : "bg-warning/15 text-warning-foreground"}`, children: o.paymentStatus }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
            " ",
            o.proofFileName
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-medium", children: formatMNT(o.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary px-3 py-1 text-[10px]", children: "Paid" }) })
        ] }, o.id)),
        proofOrders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "p-6 text-center text-muted-foreground text-sm", children: "No payment proofs uploaded yet." }) })
      ] })
    ] }) }) })
  ] });
}
function DeliveryPanel({
  orders
}) {
  const deliveryStatuses = ["Not Started", "Preparing", "Ready", "Shipped", "Delivered"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold mb-6", children: "Хүргэлт" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-muted-foreground text-xs border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Захиалга" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Хаяг" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Хүргэлт" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: "Төлөв" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3 font-medium", children: "Үйлдэл" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/40 hover:bg-white/[0.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: o.orderNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-xs text-muted-foreground", children: o.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-xs", children: o.deliveryMethod }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: o.deliveryStatus, className: "text-xs bg-transparent border border-border/60 rounded px-1.5 py-0.5", children: deliveryStatuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-xs text-primary hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 inline" }),
            " Details"
          ] }) })
        ] }, o.id)),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-6 text-center text-muted-foreground text-sm", children: "No delivery orders." }) })
      ] })
    ] }) }) })
  ] });
}
export {
  AdminDashboard as component
};
