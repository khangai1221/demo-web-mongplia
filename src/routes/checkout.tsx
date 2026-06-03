import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { useCart } from "@/stores/cart";
import { useOrders, type PaymentMethod } from "@/stores/orders";
import { formatMNT, generateOrderNumber } from "@/lib/format";
import { useState } from "react";
import { z } from "zod";
import { Check, Building2, Wallet, Store, CreditCard, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Захиалга баталгаажуулах — Mini Motors" }] }),
  component: CheckoutPage,
});

const schema = z.object({
  customerName: z.string().min(2, "Овог нэрээ оруулна уу"),
  customerPhone: z.string().min(8, "Утасны дугаар буруу"),
  customerEmail: z.string().email("Имэйл буруу").or(z.literal("")),
  city: z.string().min(2, "Хот/аймгаа оруулна уу"),
  district: z.string().min(2, "Дүүрэг/сумаа оруулна уу"),
  address: z.string().min(3, "Хаягаа оруулна уу"),
  customerNote: z.string().optional(),
  deliveryMethod: z.string(),
  paymentMethod: z.string(),
});

const deliveryOptions = [
  { id: "ub", label: "Улаанбаатар хот дотор хүргэлт", fee: 15000 },
  { id: "country", label: "Орон нутаг руу хүргэлт", fee: 35000 },
  { id: "pickup", label: "Дэлгүүрээс өөрөө авах", fee: 0 },
];

const paymentOptions: {
  id: PaymentMethod;
  label: string;
  icon: typeof Building2;
  badge?: string;
  disabled?: boolean;
}[] = [
  { id: "manual_bank", label: "Дансаар шилжүүлэх", icon: Building2 },
  { id: "cash", label: "Бэлнээр төлөх (хүргэлтэнд)", icon: Wallet },
  { id: "store_pickup_payment", label: "Дэлгүүр дээр төлөх", icon: Store },
  { id: "storepay_request", label: "StorePay-р хуваан төлөх", icon: CreditCard, badge: "хүсэлт" },
  {
    id: "pocket_zero_request",
    label: "Pocket Zero-р хуваан төлөх",
    icon: CreditCard,
    badge: "хүсэлт",
  },
  { id: "qpay", label: "QPay-р төлөх", icon: CreditCard, badge: "удахгүй", disabled: true },
];

const steps = ["Захиалгын мэдээлэл", "Хүргэлтийн мэдээлэл", "Төлбөрийн хэлбэр", "Баталгаажуулах"];

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const addOrder = useOrders((s) => s.add);
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    city: "Улаанбаатар",
    district: "",
    address: "",
    customerNote: "",
    deliveryMethod: deliveryOptions[0].id,
    paymentMethod: "manual_bank" as PaymentMethod,
    registerNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sub = subtotal();
  const delivery = deliveryOptions.find((d) => d.id === form.deliveryMethod)!;
  const total = sub + delivery.fee;
  const freeDeliveryRemaining = sub < 500000 ? 500000 - sub : 0;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="mb-4 text-muted-foreground">Сагс хоосон байна.</p>
        <Link to="/products" className="btn-primary px-6 py-3 text-sm">
          Бүтээгдэхүүн үзэх
        </Link>
      </div>
    );
  }

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validateStep = () => {
    if (step === 0) {
      const r = schema
        .pick({ customerName: true, customerPhone: true, customerEmail: true })
        .safeParse(form);
      if (!r.success) {
        const errs: Record<string, string> = {};
        r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
        setErrors(errs);
        return false;
      }
    }
    if (step === 1) {
      const r = schema.pick({ city: true, district: true, address: true }).safeParse(form);
      if (!r.success) {
        const errs: Record<string, string> = {};
        r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
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
      deliveryStatus: "Not Started" as const,
      createdAt: new Date().toISOString(),
    });
    clear();
    toast.success("Захиалга амжилттай үүслээ");
    router.navigate({ to: "/order/$orderNumber", params: { orderNumber } });
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Захиалга баталгаажуулах</h1>

      {/* Steps - scrollable on mobile */}
      <div className="flex items-center gap-2 my-6 sm:my-8 overflow-x-auto pb-2 scrollbar-none">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 shrink-0">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full grid place-items-center text-xs sm:text-sm font-bold transition-all ${
                i <= step
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border/60"
              }`}
            >
              {i < step ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : i + 1}
            </div>
            <span
              className={`text-[11px] sm:text-sm ${i === step ? "font-semibold" : "text-muted-foreground"}`}
            >
              {s}
            </span>
            {i < steps.length - 1 && <div className="w-4 sm:w-6 h-px bg-border/60" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-5">
          {step === 0 && (
            <Card title="Захиалгын мэдээлэл">
              <Field label="Овог нэр" error={errors.customerName}>
                <input
                  value={form.customerName}
                  onChange={(e) => update("customerName", e.target.value)}
                  className="input-field"
                  placeholder="Овог нэр"
                />
              </Field>
              <Field label="Утасны дугаар" error={errors.customerPhone}>
                <input
                  value={form.customerPhone}
                  onChange={(e) => update("customerPhone", e.target.value)}
                  className="input-field"
                  placeholder="99119911"
                  type="tel"
                />
              </Field>
              <Field label="Имэйл (заавал биш)" error={errors.customerEmail}>
                <input
                  value={form.customerEmail}
                  onChange={(e) => update("customerEmail", e.target.value)}
                  className="input-field"
                  placeholder="you@example.com"
                  type="email"
                />
              </Field>
            </Card>
          )}

          {step === 1 && (
            <Card title="Хүргэлтийн мэдээлэл">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Field label="Хот / аймаг" error={errors.city}>
                  <input
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="input-field"
                  />
                </Field>
                <Field label="Дүүрэг / сум" error={errors.district}>
                  <input
                    value={form.district}
                    onChange={(e) => update("district", e.target.value)}
                    className="input-field"
                  />
                </Field>
              </div>
              <Field label="Хаяг" error={errors.address}>
                <input
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  className="input-field"
                  placeholder="Байр, тоот, гудамж"
                />
              </Field>
              <Field label="Нэмэлт тайлбар">
                <textarea
                  value={form.customerNote}
                  onChange={(e) => update("customerNote", e.target.value)}
                  className="input-field min-h-[80px]"
                  placeholder="Хүргэлтийн нэмэлт мэдээлэл..."
                />
              </Field>

              {freeDeliveryRemaining > 0 && sub < 500000 && (
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
                  <strong className="text-primary">{formatMNT(freeDeliveryRemaining)}</strong>{" "}
                  үнэтэй бүтээгдэхүүн нэмбэл хүргэлт үнэгүй.
                </div>
              )}

              <Field label="Хүргэлтийн төрөл">
                <div className="space-y-2">
                  {deliveryOptions.map((d) => (
                    <label
                      key={d.id}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        form.deliveryMethod === d.id
                          ? "border-primary bg-primary/5"
                          : "border-border/60 hover:border-primary/30"
                      }`}
                    >
                      <span className="flex items-center gap-2 text-xs sm:text-sm">
                        <input
                          type="radio"
                          checked={form.deliveryMethod === d.id}
                          onChange={() => update("deliveryMethod", d.id)}
                          className="accent-primary"
                        />
                        {d.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">
                        {d.fee ? formatMNT(d.fee) : "Үнэгүй"}
                      </span>
                    </label>
                  ))}
                </div>
              </Field>
            </Card>
          )}

          {step === 2 && (
            <Card title="Төлбөрийн хэлбэр">
              <div className="space-y-2">
                {paymentOptions.map((p) => {
                  const Icon = p.icon;
                  return (
                    <label
                      key={p.id}
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                        p.disabled ? "opacity-50 cursor-not-allowed" : ""
                      } ${
                        form.paymentMethod === p.id
                          ? "border-primary bg-primary/5"
                          : "border-border/60 hover:border-primary/30"
                      }`}
                    >
                      <span className="flex items-center gap-2 sm:gap-3">
                        <input
                          type="radio"
                          disabled={p.disabled}
                          checked={form.paymentMethod === p.id}
                          onChange={() => !p.disabled && update("paymentMethod", p.id)}
                          className="accent-primary"
                        />
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">{p.label}</span>
                      </span>
                      {p.badge && (
                        <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-warning/20 text-warning-foreground uppercase shrink-0">
                          {p.badge}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>

              {(form.paymentMethod === "storepay_request" ||
                form.paymentMethod === "pocket_zero_request") && (
                <div className="mt-4 p-3 sm:p-4 rounded-xl bg-warning/10 border border-warning/30 text-xs sm:text-sm">
                  Таны хүсэлтийг бид хүлээн авлаа. Манай ажилтан тантай холбогдож хуваан төлөх
                  нөхцөлийг баталгаажуулна.
                  <Field label="Регистрийн дугаар (заавал биш)">
                    <input
                      value={form.registerNumber}
                      onChange={(e) => update("registerNumber", e.target.value)}
                      className="input-field mt-2"
                    />
                  </Field>
                </div>
              )}
            </Card>
          )}

          {step === 3 && (
            <Card title="Баталгаажуулах">
              <div className="space-y-3 text-xs sm:text-sm">
                <Summary label="Захиалагч" value={`${form.customerName} • ${form.customerPhone}`} />
                <Summary
                  label="Хүргэх хаяг"
                  value={`${form.city}, ${form.district}, ${form.address}`}
                />
                <Summary label="Хүргэлт" value={delivery.label} />
                <Summary
                  label="Төлбөр"
                  value={paymentOptions.find((p) => p.id === form.paymentMethod)?.label ?? ""}
                />
              </div>

              {form.paymentMethod === "manual_bank" && (
                <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="font-semibold text-sm mb-2">Дансны мэдээлэл:</div>
                  <div className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                    <p>Банк: Хаан банк</p>
                    <p>Дансны дугаар: XXXXXXXX</p>
                    <p>Данс эзэмшигч: Mini Motors</p>
                  </div>
                </div>
              )}
            </Card>
          )}

          <div className="flex justify-between">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="btn-outline px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium disabled:opacity-40"
            >
              Буцах
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={() => validateStep() && setStep(step + 1)}
                className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
              >
                Үргэлжлүүлэх <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            ) : (
              <button
                onClick={onSubmit}
                className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
              >
                Захиалга баталгаажуулах
              </button>
            )}
          </div>
        </div>

        {/* Order summary sidebar */}
        <aside className="h-fit p-5 sm:p-6 rounded-2xl border border-border/60 bg-card sm:sticky sm:top-28">
          <h3 className="font-display text-base sm:text-lg font-bold mb-4">Захиалга</h3>
          <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
            {items.map((i) => (
              <div key={i.productId} className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
                <img
                  src={i.image}
                  alt={i.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/80 object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium line-clamp-1">{i.name}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground">
                    {i.quantity} × {formatMNT(i.unitPrice)}
                  </div>
                </div>
                <div className="font-semibold shrink-0 text-xs sm:text-sm">
                  {formatMNT(i.unitPrice * i.quantity)}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border/60 pt-3 space-y-2 text-xs sm:text-sm">
            <SummaryRow label="Дэд дүн" value={formatMNT(sub)} />
            <SummaryRow label="Хүргэлт" value={delivery.fee ? formatMNT(delivery.fee) : "Үнэгүй"} />
            <div className="flex justify-between font-display text-base sm:text-lg font-bold pt-1">
              <span>Нийт</span>
              <span className="text-primary">{formatMNT(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 rounded-2xl border border-border/60 bg-card space-y-4">
      <h3 className="font-display text-lg sm:text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs sm:text-sm font-medium mb-1.5">{label}</div>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </label>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-muted-foreground w-28 sm:w-32 shrink-0 text-xs sm:text-sm">{label}:</div>
      <div className="font-medium text-xs sm:text-sm">{value}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span className="text-xs sm:text-sm">{label}</span>
      <span className="text-xs sm:text-sm">{value}</span>
    </div>
  );
}

export default CheckoutPage;
