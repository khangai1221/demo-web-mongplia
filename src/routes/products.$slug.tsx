import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { formatMNT } from "@/lib/format";
import { useCart } from "@/stores/cart";
import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  ShieldCheck,
  Truck,
  CreditCard,
  Wallet,
  Zap,
  Battery,
  Gauge,
  Ruler,
  Weight,
  Clock,
  Building2,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.product.name} — Mini Motors` },
            { name: "description", content: loaderData.product.shortDescription },
            { property: "og:title", content: loaderData.product.name },
            { property: "og:description", content: loaderData.product.shortDescription },
            { property: "og:image", content: loaderData.product.images[0] },
          ],
        }
      : {},
  component: ProductPage,
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
      {error.message}
    </div>
  ),
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
      Бүтээгдэхүүн олдсонгүй.
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = getRelatedProducts(product);
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const price = product.discountPrice ?? product.price;
  const hasDiscount = !!product.discountPrice;

  const onAdd = () => {
    add(product, qty);
    toast.success(`${product.name} × ${qty} сагсанд нэмэгдлээ`);
  };
  const onBuy = () => {
    add(product, qty);
    router.navigate({ to: "/checkout" });
  };

  const specRows = [
    { icon: Battery, label: "Батерей", value: product.battery },
    { icon: Gauge, label: "Дээд хурд", value: product.maxSpeed ? `${product.maxSpeed} км/ц` : "-" },
    { icon: Ruler, label: "Явах зай", value: product.rangeKm ? `${product.rangeKm} км` : "-" },
    { icon: Zap, label: "Мотор", value: product.motorPower },
    { icon: Weight, label: "Жин", value: product.weight },
    { icon: Clock, label: "Цэнэглэх хугацаа", value: product.chargingTime },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-foreground transition-colors">
          Дэлгүүр
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product main section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image gallery */}
        <div>
          <div className="bg-gradient-to-br from-secondary/80 to-background rounded-3xl p-8 md:p-12 border border-border/60 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              width={800}
              height={800}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${
                    selectedImage === i
                      ? "border-primary shadow-glow"
                      : "border-border/60 hover:border-primary/40"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain bg-secondary/50 p-2"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-3">
            {product.categoryName}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-end gap-3 mb-5">
            <div className="font-display text-3xl md:text-4xl font-bold text-primary">
              {formatMNT(price)}
            </div>
            {hasDiscount && (
              <div className="text-muted-foreground line-through text-lg">
                {formatMNT(product.price)}
              </div>
            )}
            {hasDiscount && (
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground">
                -{Math.round(((product.price - product.discountPrice!) / product.price) * 100)}%
              </span>
            )}
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 mb-5">
            {product.stock > 0 ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Нөөцөд (
                {product.stock}ш)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-medium">
                Дууссан
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">{product.shortDescription}</p>

          {/* Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {specRows.map(
              (s) =>
                s.value !== "-" &&
                s.value !== "0 км" &&
                s.value && (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60"
                  >
                    <s.icon className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <div className="text-[11px] text-muted-foreground">{s.label}</div>
                      <div className="text-sm font-semibold">{s.value}</div>
                    </div>
                  </div>
                ),
            )}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-sm font-semibold">Тоо ширхэг</div>
            <div className="flex items-center border border-border/60 rounded-xl bg-card">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-l-xl"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-12 text-center font-semibold">{qty}</div>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-r-xl"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={onAdd}
              disabled={product.stock <= 0}
              className="flex-1 min-w-[200px] btn-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" /> Сагсанд нэмэх
            </button>
            <button
              onClick={onBuy}
              disabled={product.stock <= 0}
              className="flex-1 min-w-[200px] btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Шууд худалдаж авах
            </button>
          </div>

          {/* Payment badges */}
          <div className="rounded-2xl bg-card border border-border/60 p-5">
            <div className="text-sm font-semibold mb-3">Төлбөрийн хэлбэрүүд</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <PaymentBadge icon={Building2} label="Дансаар шилжүүлэх" />
              <PaymentBadge icon={Wallet} label="StorePay хүсэлт" badge="хүсэлт" />
              <PaymentBadge icon={Wallet} label="Pocket Zero хүсэлт" badge="хүсэлт" />
              <PaymentBadge icon={CreditCard} label="QPay" badge="удахгүй" />
            </div>
          </div>
        </div>
      </div>

      {/* Full description */}
      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-4">Дэлгэрэнгүй мэдээлэл</h2>
          <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
        </div>
      </section>

      {/* Technical specification table */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-4">Техникийн үзүүлэлт</h2>
        <div className="rounded-2xl border border-border/60 overflow-hidden max-w-2xl">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Загвар", product.name],
                ["Ангилал", product.categoryName],
                ["Моторын хүчин чадал", product.motorPower],
                ["Батерей", product.battery],
                ["Нэг цэнэглэлтээр явах зай", product.rangeKm ? `${product.rangeKm} км` : "-"],
                ["Дээд хурд", product.maxSpeed ? `${product.maxSpeed} км/ц` : "-"],
                ["Даац", product.loadCapacity],
                ["Жин", product.weight],
                ["Цэнэглэх хугацаа", product.chargingTime],
                ["Баталгаат хугацаа", product.warranty],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? "bg-card" : "bg-transparent"}>
                  <td className="px-4 py-3 text-muted-foreground w-2/5 border-r border-border/40">
                    {k}
                  </td>
                  <td className="px-4 py-3 font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Delivery & Warranty */}
      <section className="mt-12 grid md:grid-cols-2 gap-4 max-w-2xl">
        <div className="p-5 rounded-2xl bg-card border border-border/60">
          <div className="flex items-center gap-3 mb-3">
            <Truck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Хүргэлтийн мэдээлэл</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Улаанбаатар дотор 24 цаг
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Орон нутаг 3-5 хоног
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Дэлгүүрээс авах боломжтой
            </li>
          </ul>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border/60">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Баталгаа</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Албан ёсны баталгаа: {product.warranty}
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Батерейны тусдаа баталгаа
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" /> Буцаах боломжтой
            </li>
          </ul>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">Холбоотой бүтээгдэхүүн</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function PaymentBadge({
  icon: Icon,
  label,
  badge,
}: {
  icon: typeof Building2;
  label: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-background border border-border/60">
      <Icon className="w-4 h-4 text-primary shrink-0" />
      <span className="text-[11px]">{label}</span>
      {badge && (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-warning/20 text-warning-foreground ml-auto">
          {badge}
        </span>
      )}
    </div>
  );
}
