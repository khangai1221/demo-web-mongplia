import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Building2, Wallet, Store, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/payment-info")({
  head: () => ({ meta: [{ title: "Төлбөрийн мэдээлэл — Mini Motors" }] }),
  component: PaymentInfo,
});

function PaymentInfo() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl font-bold mb-2">Төлбөрийн мэдээлэл</h1>
      <p className="text-muted-foreground mb-8">Бидний хүлээн авдаг төлбөрийн хэлбэрүүд</p>

      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mb-12">
        <PaymentCard
          icon={Building2}
          label="Дансаар шилжүүлэх"
          desc="Хаан банк руу шилжүүлэг хийж, баримтаа оруулна."
          active
        />
        <PaymentCard
          icon={Wallet}
          label="Бэлнээр төлөх"
          desc="Хүргэлт хүлээн авахдаа бэлнээр төлөх боломжтой."
          active
        />
        <PaymentCard
          icon={Store}
          label="Дэлгүүр дээр төлөх"
          desc="Захиалгаа дэлгүүрээс авахдаа төлнө."
          active
        />
        <PaymentCard
          icon={CreditCard}
          label="StorePay / Pocket Zero"
          desc="Хуваан төлөх хүсэлт илгээнэ."
          badge="хүсэлт"
        />
        <PaymentCard
          icon={CreditCard}
          label="QPay"
          desc="QPay апп ашиглан төлөх."
          badge="удахгүй"
        />
      </div>

      <div className="max-w-2xl p-6 rounded-2xl bg-card border border-border/60">
        <h2 className="font-display text-xl font-bold mb-3">Дансаар шилжүүлэх заавар</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>1. Дээрх данс руу захиалгын дүнг шилжүүлнэ.</p>
          <p>2. Гүйлгээний утга дээр захиалгын дугаараа бичнэ.</p>
          <p>3. Баримтаа захиалгийн хуудаснаас оруулна.</p>
          <p>4. Баталгаажсаны дараа захиалга боловсруулагдана.</p>
        </div>
        <Link
          to="/products"
          className="btn-primary inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm"
        >
          Дэлгүүрээр аялах <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function PaymentCard({
  icon: Icon,
  label,
  desc,
  badge,
  active,
}: {
  icon: any;
  label: string;
  desc: string;
  badge?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`p-5 rounded-2xl border ${active ? "bg-card border-border/60" : "border-border/40 opacity-60"} flex items-start gap-4`}
    >
      <Icon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
      <div>
        <div className="font-semibold flex items-center gap-2">
          {label}
          {badge && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-warning/20 text-warning-foreground">
              {badge}
            </span>
          )}
        </div>
        <div className="text-xs text-muted-foreground mt-1">{desc}</div>
      </div>
    </div>
  );
}
