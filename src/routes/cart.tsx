import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/stores/cart";
import { formatMNT } from "@/lib/format";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Сагс — Mini Motors" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, setQty, subtotal } = useCart();
  const sub = subtotal();
  const deliveryFee = sub >= 500000 ? 0 : sub > 0 ? 15000 : 0;
  const total = sub + deliveryFee;
  const freeDeliveryRemaining = sub < 500000 ? 500000 - sub : 0;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60">
          <ShoppingBag className="w-9 h-9 text-muted-foreground" />
        </div>
        <h1 className="font-display text-2xl font-bold mb-2">Сагс хоосон байна</h1>
        <p className="text-muted-foreground mb-6">Бүтээгдэхүүн нэмж сагсаа дүүргэнэ үү.</p>
        <Link
          to="/products"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
        >
          Бүтээгдэхүүн үзэх <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl font-bold mb-8">Таны сагс</h1>

      {/* Free shipping indicator */}
      {freeDeliveryRemaining > 0 && (
        <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20 text-sm flex items-center gap-3">
          <Truck className="w-5 h-5 text-primary shrink-0" />
          <span>
            <strong>{formatMNT(freeDeliveryRemaining)}</strong> үнэтэй бүтээгдэхүүн нэмбэл хүргэлт
            үнэгүй болно!
          </span>
        </div>
      )}
      {freeDeliveryRemaining === 0 && sub > 0 && (
        <div className="mb-6 p-4 rounded-2xl bg-success/10 border border-success/20 text-sm flex items-center gap-3">
          <Truck className="w-5 h-5 text-success shrink-0" />
          <span>Хүргэлт үнэгүй! Та 500,000₮-с дээш захиалга хийсэн байна.</span>
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-3">
          {items.map((i) => (
            <div
              key={i.productId}
              className="flex gap-4 p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/20 transition-all"
            >
              <Link
                to="/products/$slug"
                params={{ slug: i.slug }}
                className="w-24 h-24 rounded-xl bg-secondary/80 overflow-hidden shrink-0"
              >
                <img src={i.image} alt={i.name} className="w-full h-full object-contain p-2" />
              </Link>
              <div className="flex-1 flex flex-col min-w-0">
                <Link
                  to="/products/$slug"
                  params={{ slug: i.slug }}
                  className="font-semibold hover:text-primary transition-colors line-clamp-1"
                >
                  {i.name}
                </Link>
                <div className="text-sm text-muted-foreground mt-0.5">{formatMNT(i.unitPrice)}</div>
                <div className="mt-auto flex items-center justify-between gap-4">
                  <div className="flex items-center border border-border/60 rounded-lg bg-background">
                    <button
                      onClick={() => setQty(i.productId, i.quantity - 1)}
                      className="w-8 h-8 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-l-lg"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-8 text-center text-sm font-semibold">{i.quantity}</div>
                    <button
                      onClick={() => setQty(i.productId, i.quantity + 1)}
                      className="w-8 h-8 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-r-lg"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="font-display font-bold text-lg">
                    {formatMNT(i.unitPrice * i.quantity)}
                  </div>
                </div>
              </div>
              <button
                onClick={() => remove(i.productId)}
                className="w-9 h-9 rounded-lg grid place-items-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <aside className="h-fit p-6 rounded-2xl border border-border/60 bg-card sticky top-28 space-y-3">
          <h3 className="font-display text-xl font-bold mb-2">Захиалгын дүн</h3>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Дэд дүн</span>
            <span>{formatMNT(sub)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Хүргэлтийн төлбөр</span>
            <span>{deliveryFee === 0 ? "Үнэгүй" : formatMNT(deliveryFee)}</span>
          </div>
          <div className="border-t border-border/60 my-2" />
          <div className="flex justify-between font-display text-lg font-bold">
            <span>Нийт төлбөр</span>
            <span className="text-primary">{formatMNT(total)}</span>
          </div>
          <div className="space-y-2 pt-2">
            <Link
              to="/checkout"
              className="w-full btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm"
            >
              Захиалга өгөх <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Үргэлжлүүлэн худалдан авах
            </Link>
          </div>
          <div className="flex items-center gap-2 pt-3 text-xs text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5" />
            Аюулгүй төлбөр
          </div>
        </aside>
      </div>
    </div>
  );
}
