import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useOrders, type Order } from "@/stores/orders";
import { formatMNT } from "@/lib/format";
import { Search, Package } from "lucide-react";

export const Route = createFileRoute("/track")({
  head: () => ({ meta: [{ title: "Захиалга мөшгөх — Mini Motors" }] }),
  component: TrackPage,
});

const statusColors: Record<string, string> = {
  New: "bg-secondary text-foreground",
  "Pending Payment": "bg-warning/20 text-warning-foreground",
  "Pending Verification": "bg-warning/20 text-warning-foreground",
  Paid: "bg-success/20 text-success",
  Processing: "bg-primary/20 text-primary",
  "Ready for Delivery": "bg-primary/20 text-primary",
  Shipped: "bg-accent/30 text-accent-foreground",
  Delivered: "bg-success/20 text-success",
  Completed: "bg-success/20 text-success",
  Cancelled: "bg-destructive/20 text-destructive",
};

const statusMn: Record<string, string> = {
  New: "Шинэ",
  "Pending Payment": "Төлбөр хүлээгдэж буй",
  "Pending Verification": "Баталгаажуулалт хүлээгдэж буй",
  Paid: "Төлөгдсөн",
  Processing: "Бэлтгэгдэж буй",
  "Ready for Delivery": "Хүргэлтэнд бэлэн",
  Shipped: "Хүргэлтэнд гарсан",
  Delivered: "Хүргэгдсэн",
  Completed: "Дууссан",
  Cancelled: "Цуцлагдсан",
  Unpaid: "Төлөөгүй",
  Pending: "Хүлээгдэж буй",
  "Proof Uploaded": "Баримт ирсэн",
  Failed: "Амжилтгүй",
  Refunded: "Буцаагдсан",
  "Not Started": "Эхлээгүй",
  Preparing: "Бэлтгэж буй",
  Ready: "Бэлэн",
  "Delivered ": "Хүргэгдсэн",
};

function TrackPage() {
  const [q, setQ] = useState("");
  const findBy = useOrders((s) => s.findBy);
  const [result, setResult] = useState<Order | undefined | null>(null);

  const onSearch = () => {
    if (!q.trim()) return;
    const o = findBy(q.toUpperCase().startsWith("MM-") ? { orderNumber: q } : { phone: q });
    setResult(o ?? null);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Захиалга мөшгөх</h1>
        <p className="text-muted-foreground">Захиалгын дугаар эсвэл утасны дугаараар хайна уу</p>
      </div>

      <div className="flex gap-2 mb-8">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="MM-000001 эсвэл 99119911"
          className="flex-1 px-4 py-3 rounded-xl border border-border bg-background"
        />
        <button
          onClick={onSearch}
          className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2"
        >
          <Search className="w-4 h-4" /> Хайх
        </button>
      </div>

      {result === null && (
        <div className="text-center py-12 text-muted-foreground">Захиалга олдсонгүй.</div>
      )}

      {result && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-xs text-muted-foreground">Захиалгын дугаар</div>
              <div className="font-display text-2xl font-bold">{result.orderNumber}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {new Date(result.createdAt).toLocaleString("mn-MN")}
              </div>
            </div>
            <div className="font-display text-2xl font-bold text-primary">
              {formatMNT(result.total)}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <StatusCard
              title="Захиалгын төлөв"
              value={statusMn[result.orderStatus] ?? result.orderStatus}
              className={statusColors[result.orderStatus]}
            />
            <StatusCard
              title="Төлбөрийн төлөв"
              value={statusMn[result.paymentStatus] ?? result.paymentStatus}
              className={statusColors[result.paymentStatus] ?? "bg-secondary"}
            />
            <StatusCard
              title="Хүргэлтийн төлөв"
              value={statusMn[result.deliveryStatus] ?? result.deliveryStatus}
              className={statusColors[result.deliveryStatus] ?? "bg-secondary"}
            />
          </div>

          <div className="border-t border-border pt-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Package className="w-4 h-4" /> Бүтээгдэхүүн
            </h3>
            {result.items.map((i) => (
              <div key={i.productId} className="flex justify-between text-sm py-1">
                <span>
                  {i.name} × {i.quantity}
                </span>
                <span className="font-medium">{formatMNT(i.unitPrice * i.quantity)}</span>
              </div>
            ))}
          </div>

          <Link
            to="/order/$orderNumber"
            params={{ orderNumber: result.orderNumber }}
            className="block text-center text-primary underline"
          >
            Дэлгэрэнгүй харах
          </Link>
        </div>
      )}
    </div>
  );
}

function StatusCard({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-border bg-background">
      <div className="text-xs text-muted-foreground mb-1">{title}</div>
      <div className={`inline-block px-2 py-1 rounded-md text-xs font-semibold ${className}`}>
        {value}
      </div>
    </div>
  );
}
