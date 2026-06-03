import { createFileRoute, Link } from "@tanstack/react-router";
import { useOrders, type OrderStatus, type DeliveryStatus } from "@/stores/orders";
import { products } from "@/data/products";
import { formatMNT } from "@/lib/format";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ListOrdered,
  CreditCard,
  Users,
  Boxes,
  Truck,
  Settings,
  LogOut,
  Eye,
  Check,
  ShoppingCart,
  Clock,
  DollarSign,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Админ — Mini Motors" }] }),
  component: AdminDashboard,
});

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "categories", label: "Categories", icon: ListOrdered },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "customers", label: "Customers", icon: Users },
  { id: "inventory", label: "Inventory", icon: Boxes },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "settings", label: "Settings", icon: Settings },
];

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { orders } = useOrders();

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter(
    (o) => o.orderStatus === "New" || o.orderStatus === "Pending Payment",
  ).length;
  const totalProducts = products.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-display font-bold text-sm">
              MINI <span className="text-primary">MOTORS</span>
            </Link>
            <span className="text-xs text-muted-foreground bg-card px-2 py-0.5 rounded border border-border/60">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-outline px-3 py-1.5 text-xs inline-flex items-center gap-1.5">
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${sidebarOpen ? "block" : "hidden"} lg:block w-56 shrink-0 border-r border-border/60 min-h-[calc(100vh-3.5rem)] bg-card/50`}
        >
          <nav className="p-3 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {activeTab === "dashboard" && (
            <DashboardView
              totalOrders={totalOrders}
              totalRevenue={totalRevenue}
              pendingOrders={pendingOrders}
              totalProducts={totalProducts}
              orders={orders}
            />
          )}
          {activeTab === "orders" && <OrdersPanel orders={orders} />}
          {activeTab === "products" && <ProductsPanel />}
          {activeTab === "payments" && <PaymentsPanel orders={orders} />}
          {activeTab === "delivery" && <DeliveryPanel orders={orders} />}
          {["categories", "customers", "inventory", "settings"].includes(activeTab) && (
            <div className="text-center py-20 text-muted-foreground">
              <div className="w-16 h-16 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60">
                <Settings className="w-6 h-6" />
              </div>
              <p>{activeTab} panel coming soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function DashboardView({
  totalOrders,
  totalRevenue,
  pendingOrders,
  totalProducts,
  orders,
}: {
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  totalProducts: number;
  orders: any[];
}) {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={ShoppingCart} label="Нийт захиалга" value={totalOrders.toString()} />
        <StatCard icon={DollarSign} label="Нийт орлого" value={formatMNT(totalRevenue)} />
        <StatCard icon={Clock} label="Хүлээгдэж буй" value={pendingOrders.toString()} />
        <StatCard icon={Package} label="Бүтээгдэхүүн" value={totalProducts.toString()} />
      </div>

      <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
        <div className="p-4 border-b border-border/60">
          <h2 className="font-semibold">Сүүлийн захиалгууд</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs border-b border-border/60">
                <th className="text-left p-3 font-medium">Захиалга</th>
                <th className="text-left p-3 font-medium">Захиалагч</th>
                <th className="text-left p-3 font-medium">Төлөв</th>
                <th className="text-left p-3 font-medium">Төлбөр</th>
                <th className="text-right p-3 font-medium">Дүн</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((o) => (
                <tr key={o.id} className="border-b border-border/40 hover:bg-white/[0.02]">
                  <td className="p-3 font-medium">{o.orderNumber}</td>
                  <td className="p-3 text-muted-foreground">{o.customerName}</td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-warning/15 text-warning-foreground">
                      {o.orderStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                        o.paymentStatus === "Paid"
                          ? "bg-success/15 text-success"
                          : o.paymentStatus === "Unpaid"
                            ? "bg-destructive/15 text-destructive"
                            : "bg-warning/15 text-warning-foreground"
                      }`}
                    >
                      {o.paymentStatus}
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium">{formatMNT(o.total)}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground text-sm">
                    Захиалга байхгүй байна.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Package;
  label: string;
  value: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border/60">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="font-display text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function OrdersPanel({ orders }: { orders: any[] }) {
  const orderStatuses: OrderStatus[] = [
    "New",
    "Pending Payment",
    "Pending Verification",
    "Paid",
    "Processing",
    "Ready for Delivery",
    "Shipped",
    "Delivered",
    "Completed",
    "Cancelled",
  ];

  const updateStatus = (orderId: string, status: string) => {
    toast.success(`Захиалга ${orderId} → ${status}`);
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Захиалгууд</h1>
      <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs border-b border-border/60">
                <th className="text-left p-3 font-medium">#</th>
                <th className="text-left p-3 font-medium">Захиалагч</th>
                <th className="text-left p-3 font-medium">Утас</th>
                <th className="text-left p-3 font-medium">Бүтээгдэхүүн</th>
                <th className="text-left p-3 font-medium">Төлбөр</th>
                <th className="text-left p-3 font-medium">Төлөв</th>
                <th className="text-left p-3 font-medium">Баримт</th>
                <th className="text-right p-3 font-medium">Дүн</th>
                <th className="text-center p-3 font-medium">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-border/40 hover:bg-white/[0.02]">
                  <td className="p-3 font-medium">{o.orderNumber}</td>
                  <td className="p-3">{o.customerName}</td>
                  <td className="p-3 text-muted-foreground">{o.customerPhone}</td>
                  <td className="p-3 text-xs">{o.items.length}ш</td>
                  <td className="p-3">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        o.paymentStatus === "Paid"
                          ? "bg-success/15 text-success"
                          : o.paymentStatus === "Unpaid"
                            ? "bg-destructive/15 text-destructive"
                            : "bg-warning/15 text-warning-foreground"
                      }`}
                    >
                      {o.paymentStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <select
                      value={o.orderStatus}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className="text-xs bg-transparent border border-border/60 rounded px-1.5 py-0.5"
                    >
                      {orderStatuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3">
                    {o.proofFileName ? (
                      <span className="inline-flex items-center gap-1 text-xs text-success">
                        <Check className="w-3 h-3" /> Uploaded
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="p-3 text-right font-medium">{formatMNT(o.total)}</td>
                  <td className="p-3 text-center">
                    <button className="text-xs text-primary hover:underline">
                      <Eye className="w-3.5 h-3.5 inline" /> View
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-muted-foreground text-sm">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductsPanel() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Бүтээгдэхүүн</h1>
      <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs border-b border-border/60">
                <th className="text-left p-3 font-medium">Бүтээгдэхүүн</th>
                <th className="text-left p-3 font-medium">Ангилал</th>
                <th className="text-left p-3 font-medium">Үнэ</th>
                <th className="text-left p-3 font-medium">Хямдрал</th>
                <th className="text-right p-3 font-medium">Нөөц</th>
                <th className="text-center p-3 font-medium">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-border/40 hover:bg-white/[0.02]">
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3 text-muted-foreground">{p.categoryName}</td>
                  <td className="p-3">{formatMNT(p.price)}</td>
                  <td className="p-3">
                    {p.discountPrice ? (
                      <span className="text-success text-xs">{formatMNT(p.discountPrice)}</span>
                    ) : (
                      <span className="text-muted-foreground text-xs">—</span>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <span
                      className={`font-medium ${p.stock <= 5 ? "text-destructive" : "text-success"}`}
                    >
                      {p.stock}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button className="btn-outline px-3 py-1 text-xs">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PaymentsPanel({ orders }: { orders: any[] }) {
  const proofOrders = orders.filter((o) => o.proofFileName);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Төлбөр</h1>
      <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs border-b border-border/60">
                <th className="text-left p-3 font-medium">Захиалга</th>
                <th className="text-left p-3 font-medium">Захиалагч</th>
                <th className="text-left p-3 font-medium">Төлбөрийн хэлбэр</th>
                <th className="text-left p-3 font-medium">Төлөв</th>
                <th className="text-left p-3 font-medium">Баримт</th>
                <th className="text-right p-3 font-medium">Дүн</th>
                <th className="text-center p-3 font-medium">Төлсөн гэж тэмдэглэх</th>
              </tr>
            </thead>
            <tbody>
              {proofOrders.map((o) => (
                <tr key={o.id} className="border-b border-border/40 hover:bg-white/[0.02]">
                  <td className="p-3 font-medium">{o.orderNumber}</td>
                  <td className="p-3">{o.customerName}</td>
                  <td className="p-3 text-xs">{o.paymentMethod}</td>
                  <td className="p-3">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        o.paymentStatus === "Paid"
                          ? "bg-success/15 text-success"
                          : "bg-warning/15 text-warning-foreground"
                      }`}
                    >
                      {o.paymentStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="text-xs text-primary inline-flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {o.proofFileName}
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium">{formatMNT(o.total)}</td>
                  <td className="p-3 text-center">
                    <button className="btn-primary px-3 py-1 text-[10px]">Paid</button>
                  </td>
                </tr>
              ))}
              {proofOrders.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-muted-foreground text-sm">
                    No payment proofs uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DeliveryPanel({ orders }: { orders: any[] }) {
  const deliveryStatuses: DeliveryStatus[] = [
    "Not Started",
    "Preparing",
    "Ready",
    "Shipped",
    "Delivered",
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-6">Хүргэлт</h1>
      <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs border-b border-border/60">
                <th className="text-left p-3 font-medium">Захиалга</th>
                <th className="text-left p-3 font-medium">Хаяг</th>
                <th className="text-left p-3 font-medium">Хүргэлт</th>
                <th className="text-left p-3 font-medium">Төлөв</th>
                <th className="text-center p-3 font-medium">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-border/40 hover:bg-white/[0.02]">
                  <td className="p-3 font-medium">{o.orderNumber}</td>
                  <td className="p-3 text-xs text-muted-foreground">{o.address}</td>
                  <td className="p-3 text-xs">{o.deliveryMethod}</td>
                  <td className="p-3">
                    <select
                      value={o.deliveryStatus}
                      className="text-xs bg-transparent border border-border/60 rounded px-1.5 py-0.5"
                    >
                      {deliveryStatuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3 text-center">
                    <button className="text-xs text-primary hover:underline">
                      <Eye className="w-3.5 h-3.5 inline" /> Details
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground text-sm">
                    No delivery orders.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
