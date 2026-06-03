import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";
import { formatMNT } from "@/lib/format";
import { useCart } from "@/stores/cart";
import { toast } from "sonner";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add);
  const price = product.discountPrice ?? product.price;
  const hasDiscount = !!product.discountPrice;
  const outOfStock = product.stock <= 0;

  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discountPrice!) / product.price) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-200"
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 sm:p-5 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1">
            {product.isNew && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-semibold rounded-md bg-gray-900 text-white">
                Нин
              </span>
            )}
            {hasDiscount && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-semibold rounded-md bg-red-500 text-white">
                -{discountPercent}%
              </span>
            )}
          </div>

          {outOfStock && (
            <div className="absolute inset-0 bg-white/80 grid place-items-center">
              <span className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold">
                Дууссан
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">
          {product.categoryName}
        </div>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1 text-sm"
        >
          {product.name}
        </Link>
        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 mb-3">{product.shortDescription}</p>

        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-[11px] text-gray-300 line-through">
                {formatMNT(product.price)}
              </span>
            )}
            <span className="font-semibold text-base text-gray-900">{formatMNT(price)}</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (outOfStock) return;
              add(product);
              toast.success(product.name + " сагсанд нэмэгдлээ");
            }}
            disabled={outOfStock}
            className="w-9 h-9 rounded-lg bg-gray-900 text-white grid place-items-center hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            aria-label="Сагсанд нэмэх"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
