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
    <div className="container mx-auto px-4 py-6 sm:py-10">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-foreground transition-colors">
          Дэлгүүр
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground text-xs sm:text-sm">{product.name}</span>
      </nav>

      {/* Product main section */}
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
        {/* Image gallery */}
        <div>
          <div className="bg-gradient-to-br from-secondary/80 to-background rounded-3xl p-6 sm:p-8 md:p-12 border border-border/60 mb-3 sm:mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              width={800}
              height={800}
              className="w-full max-w-sm sm:max-w-md mx-auto object-contain"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 sm:gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 overflow-hidden transition-all ${
                    selectedImage === i
                      ? "border-primary shadow-glow"
                      : "border-border/60 hover:border-primary/40"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain bg-secondary/50 p-1.5 sm:p-2"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-xs font-medium text-primary mb-2 sm:mb-3">
            {product.categoryName}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {product.name}
          </h1>

          <div className="flex items-end gap-3 mb-4 sm:mb-5">
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              {formatMNT(price)}
            </div>
            {hasDiscount && (
              <div className="text-muted-foreground line-through text-base sm:text-lg">
                {formatMNT(product.price)}
              </div>
            )}
            {hasDiscount && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground">
                -{Math.round(((product.price - product.discountPrice!) / product.price) * 100)}%
              </span>
            )}
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            {product.stock > 0 ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-success/15 text-success text-[10px] sm:text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Нөөцөд (
                {product.stock}ш)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-destructive/15 text-destructive text-[10px] sm:text-xs font-medium">
                Дууссан
              </span>
            )}
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {specRows.map(
              (s) =>
                s.value !== "-" &&
                s.value !== "0 км" &&
                s.value && (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-card border border-border/60"
                  >
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground">
                        {s.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold truncate">{s.value}</div>
                    </div>
                  </div>
                ),
            )}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="text-xs sm:text-sm font-semibold">Тоо ширхэг</div>
            <div className="flex items-center border border-border/60 rounded-xl bg-card">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-l-xl"
              >
                <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <div className="w-10 sm:w-12 text-center text-sm sm:text-base font-semibold">
                {qty}
              </div>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center hover:bg-white/[0.06] transition-colors rounded-r-xl"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Action buttons - full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
            <button
              onClick={onAdd}
              disabled={product.stock <= 0}
              className="w-full sm:flex-1 btn-outline inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" /> Сагсанд нэмэх
            </button>
            <button
              onClick={onBuy}
              disabled={product.stock <= 0}
              className="w-full sm:flex-1 btn-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Шууд худалдаж авах
            </button>
          </div>

          {/* Payment badges */}
          <div className="rounded-2xl bg-card border border-border/60 p-4 sm:p-5">
            <div className="text-xs sm:text-sm font-semibold mb-3">Төлбөрийн хэлбэрүүд</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] sm:text-xs">
              <PaymentBadge icon={Building2} label="Дансаар шилжүүлэх" />
              <PaymentBadge icon={Wallet} label="StorePay хүсэлт" badge="хүсэлт" />
              <PaymentBadge icon={Wallet} label="Pocket Zero хүсэлт" badge="хүсэлт" />
              <PaymentBadge icon={CreditCard} label="QPay" badge="удахгүй" />
            </div>
          </div>
        </div>
      </div>

      {/* Full description */}
      <section className="mt-12 sm:mt-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Дэлгэрэнгүй мэдээлэл
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {product.fullDescription}
          </p>
        </div>
      </section>

      {/* Technical specification table */}
      <section className="mt-10 sm:mt-12">
        <h2 className="font-display text-xl sm:text-2xl font-bold mb-4">Техникийн үзүүлэлт</h2>
        <div className="rounded-2xl border border-border/60 overflow-hidden max-w-2xl">
          <table className="w-full text-xs sm:text-sm">
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
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-muted-foreground w-2/5 border-r border-border/40">
                    {k}
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Delivery & Warranty */}
      <section className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60">
          <div className="flex items-center gap-3 mb-3">
            <Truck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">Хүргэлтийн мэдээлэл</h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/60">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm sm:text-base">Баталгаа</h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
        <section className="mt-12 sm:mt-16">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Холбоотой бүтээгдэхүүн
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
    <div className="flex items-center gap-2 p-2 rounded-xl bg-background border border-border/60">
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
      <span className="text-[10px] sm:text-[11px]">{label}</span>
      {badge && (
        <span className="text-[8px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded-full bg-warning/20 text-warning-foreground ml-auto">
          {badge}
        </span>
      )}
    </div>
  );
}
