import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useOrders } from "@/stores/orders";
import { formatMNT } from "@/lib/format";
import {
  CheckCircle,
  Building2,
  Upload,
  FileText,
  ArrowRight,
  Clock,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/order/$orderNumber")({
  loader: ({ params }) => {
    const orders = useOrders.getState().orders;
    const order = orders.find((o) => o.orderNumber === params.orderNumber);
    if (!order) throw notFound();
    return { order };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [{ title: `Захиалга ${loaderData.order.orderNumber} — Mini Motors` }],
        }
      : {},
  component: OrderPage,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
      Захиалга олдсонгүй.
    </div>
  ),
});

function OrderPage() {
  const { order } = Route.useLoaderData();
  const attachProof = useOrders((s) => s.attachProof);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(!!order.proofFileName);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!validTypes.includes(file.type)) {
      toast.error("Зөвхөн jpg, png, jpeg, pdf файл хүлээн авна.");
      return;
    }

    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      attachProof(order.orderNumber, file.name);
      setUploaded(true);
      setUploading(false);
      toast.success("Төлбөрийн баримт амжилттай илгээгдлээ");
    }, 1500);
  };

  const statusStep = (status: string) => {
    const steps = [
      "New",
      "Pending Payment",
      "Pending Verification",
      "Paid",
      "Processing",
      "Ready for Delivery",
      "Delivered",
    ];
    const idx = steps.indexOf(status);
    return idx >= 0 ? idx + 1 : 1;
  };

  const isBankTransfer = order.paymentMethod === "manual_bank";
  const isUnpaid = order.paymentStatus === "Unpaid" || order.paymentStatus === "Proof Uploaded";

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Success header */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-2xl bg-success/15 mx-auto grid place-items-center mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Захиалга амжилттай бүртгэгдлээ
        </h1>
        <p className="text-muted-foreground">
          Захиалгын дугаар: <span className="font-bold text-foreground">{order.orderNumber}</span>
        </p>
      </div>

      {/* Bank transfer info */}
      {isBankTransfer && (
        <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-card border border-border/60">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-bold">Дансаар шилжүүлэх заавар</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Та захиалгаа баталгаажуулахын тулд доорх данс руу төлбөрөө шилжүүлнэ үү.
          </p>
          <div className="bg-background rounded-xl p-4 border border-border/60 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Банк:</span>
              <span className="font-medium">Хаан банк</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Дансны дугаар:</span>
              <span className="font-medium font-mono">XXXXXXXX</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Данс эзэмшигч:</span>
              <span className="font-medium">Mini Motors</span>
            </div>
            <div className="border-t border-border/60 pt-2 mt-2 flex justify-between">
              <span className="text-muted-foreground">Гүйлгээний утга:</span>
              <span className="font-medium text-primary">{order.orderNumber}</span>
            </div>
            <div className="border-t border-border/60 pt-2 mt-2 flex justify-between">
              <span className="text-muted-foreground">Дүн:</span>
              <span className="font-bold text-lg text-primary">{formatMNT(order.total)}</span>
            </div>
          </div>

          {/* Payment proof upload */}
          {isUnpaid && !uploaded && (
            <div className="mt-5">
              <div
                className="border-2 border-dashed border-border/60 rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <div className="text-sm font-medium mb-1">Төлбөрийн баримт оруулах</div>
                <div className="text-xs text-muted-foreground">
                  jpg, png, jpeg, pdf файл хүлээн авна
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={handleUpload}
                  disabled={uploading}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  disabled={uploading}
                  className="mt-3 btn-outline px-4 py-2 text-xs inline-flex items-center gap-2"
                >
                  {uploading ? (
                    <>Оруулж байна...</>
                  ) : (
                    <>
                      <Upload className="w-3.5 h-3.5" /> Баримт оруулах
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {uploaded && (
            <div className="mt-5 p-4 rounded-xl bg-success/10 border border-success/20 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success shrink-0" />
              <div className="text-sm">
                <div className="font-medium">Баримт хүлээн авсан</div>
                <div className="text-xs text-muted-foreground">
                  Бид таны баримтыг шалгаж баталгаажуулна.
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Order details */}
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="p-6 rounded-2xl bg-card border border-border/60">
          <h2 className="font-display text-lg font-bold mb-4">Захиалгын дэлгэрэнгүй</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Төлөв</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-warning/15 text-warning-foreground text-xs font-medium">
                <Clock className="w-3 h-3" />
                {order.paymentStatus === "Proof Uploaded"
                  ? "Баталгаажуулах шатанд"
                  : "Хүлээгдэж байна"}
              </span>
            </div>
            <OrderRow label="Захиалагч" value={order.customerName} />
            <OrderRow label="Утас" value={order.customerPhone} />
            <OrderRow label="Хаяг" value={`${order.city}, ${order.district}, ${order.address}`} />
            <OrderRow label="Хүргэлт" value={order.deliveryMethod} />
            <OrderRow
              label="Төлбөр"
              value={
                order.paymentMethod === "manual_bank" ? "Дансаар шилжүүлэх" : order.paymentMethod
              }
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/60">
          <h2 className="font-display text-lg font-bold mb-4">Бүтээгдэхүүнүүд</h2>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground"> × {item.quantity}</span>
                </div>
                <span className="font-medium">{formatMNT(item.unitPrice * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border/60 mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Дэд дүн</span>
              <span>{formatMNT(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Хүргэлт</span>
              <span>{order.deliveryFee ? formatMNT(order.deliveryFee) : "Үнэгүй"}</span>
            </div>
            <div className="flex justify-between font-display text-lg font-bold pt-1">
              <span>Нийт</span>
              <span className="text-primary">{formatMNT(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            Үргэлжлүүлэн дэлгүүрэх <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function OrderRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
