import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Battery, Gauge, Zap as ZapIcon, ShoppingCart, Eye } from "lucide-react";
import type { Product } from "@/data/products";
import { formatMNT } from "@/lib/format";
import { useCart } from "@/stores/cart";
import { toast } from "sonner";
import { useState } from "react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add);
  const price = product.discountPrice ?? product.price;
  const hasDiscount = !!product.discountPrice;
  const outOfStock = product.stock <= 0;
  const [hovered, setHovered] = useState(false);

  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discountPrice!) / product.price) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 glow-card"
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block relative">
        <div className="relative aspect-square bg-gradient-to-br from-secondary/80 to-background overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-primary text-primary-foreground tracking-wide">
                NEW
              </span>
            )}
            {hasDiscount && (
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground tracking-wide">
                SALE -{discountPercent}%
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-500/90 text-black tracking-wide">
                BEST
              </span>
            )}
          </div>

          {/* Quick view overlay */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
              <Eye className="w-4 h-4" />
              Quick View
            </span>
          </div>

          {outOfStock && (
            <div className="absolute inset-0 bg-background/70 grid place-items-center backdrop-blur-sm">
              <span className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-semibold">
                Дууссан
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 md:p-5 flex flex-col gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground/70 mb-1">
            {product.categoryName}
          </div>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="font-semibold leading-tight hover:text-primary transition-colors line-clamp-1 text-sm md:text-base"
          >
            {product.name}
          </Link>
          <p className="text-xs text-muted-foreground/60 mt-1 line-clamp-1">
            {product.shortDescription}
          </p>
        </div>

        {/* Spec icons */}
        {product.specs && product.specs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.specs.map((spec) => (
              <span
                key={spec.label}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-medium"
              >
                {spec.label === "Явах зай" && <Battery className="w-2.5 h-2.5" />}
                {spec.label === "Хурд" && <Gauge className="w-2.5 h-2.5" />}
                {spec.label === "Мотор" && <ZapIcon className="w-2.5 h-2.5" />}
                {spec.label === "Батерей" && <ZapIcon className="w-2.5 h-2.5" />}
                {!["Явах зай", "Хурд", "Мотор", "Батерей"].includes(spec.label) && (
                  <ZapIcon className="w-2.5 h-2.5" />
                )}
                {spec.label === "Явах зай" ? spec.value : spec.value}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-[11px] text-muted-foreground/50 line-through">
                {formatMNT(product.price)}
              </span>
            )}
            <span className="font-display font-bold text-lg md:text-xl text-foreground">
              {formatMNT(price)}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (outOfStock) return;
              add(product);
              toast.success(product.name + " сагсанд нэмэгдлээ");
            }}
            disabled={outOfStock}
            className="w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90 active:scale-95 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Сагсанд нэмэх"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
