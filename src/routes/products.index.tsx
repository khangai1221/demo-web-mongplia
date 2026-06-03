import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { SlidersHorizontal, X, Search, ChevronDown } from "lucide-react";
import { formatMNT } from "@/lib/format";
import { z } from "zod";

const searchSchema = z.object({
  category: z.string().optional(),
  sort: z.enum(["new", "price-asc", "price-desc", "popular", "viewed"]).optional(),
});

export const Route = createFileRoute("/products/")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Бүтээгдэхүүн — Mini Motors" },
      {
        name: "description",
        content: "Цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн жагсаалт.",
      },
    ],
  }),
  component: ProductsPage,
});

const sortOptions = [
  { value: "new", label: "Шинэ" },
  { value: "price-asc", label: "Үнэ өсөхөөр" },
  { value: "price-desc", label: "Үнэ буурахаар" },
  { value: "popular", label: "Хамгийн их зарагдсан" },
  { value: "viewed", label: "Хамгийн их үзсэн" },
];

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const [category, setCategory] = useState<string>(search.category ?? "");
  const [sort, setSort] = useState<string>(search.sort ?? "new");
  const [maxPrice, setMaxPrice] = useState(5_000_000);
  const [inStock, setInStock] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [minRange, setMinRange] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category && p.categorySlug !== category) return false;
      const price = p.discountPrice ?? p.price;
      if (price > maxPrice) return false;
      if (inStock && p.stock <= 0) return false;
      if (hasDiscount && !p.discountPrice) return false;
      if (minRange > 0 && p.rangeKm < minRange) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort(
          (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price),
        );
        break;
      case "price-desc":
        list = [...list].sort(
          (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price),
        );
        break;
      case "popular":
        list = [...list].sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));
        break;
      case "viewed":
        list = [...list].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
        break;
    }
    return list;
  }, [category, sort, maxPrice, inStock, hasDiscount, minRange]);

  const updateCategory = (slug: string) => {
    setCategory(slug);
    navigate({ search: { ...search, category: slug || undefined } });
  };

  const FiltersPanel = (
    <div className="space-y-6">
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-3">
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold text-sm">Шүүлтүүр</span>
        </div>
        <div className="h-px bg-border/60" />
      </div>

      <FilterGroup label="Ангилал">
        <button
          onClick={() => updateCategory("")}
          className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
            !category ? "bg-primary/10 text-primary font-medium" : "hover:bg-white/[0.04]"
          }`}
        >
          Бүгд
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => updateCategory(c.slug)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
              category === c.slug
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-white/[0.04]"
            }`}
          >
            {c.name}
          </button>
        ))}
      </FilterGroup>

      <FilterGroup label={`Макс үнэ: ${formatMNT(maxPrice)}`}>
        <input
          type="range"
          min={100_000}
          max={5_000_000}
          step={100_000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(+e.target.value)}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
          <span>{formatMNT(100_000)}</span>
          <span>{formatMNT(5_000_000)}</span>
        </div>
      </FilterGroup>

      <FilterGroup label="Явах зай">
        <input
          type="range"
          min={0}
          max={120}
          step={10}
          value={minRange}
          onChange={(e) => setMinRange(+e.target.value)}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
          <span>0 км</span>
          <span>120 км</span>
        </div>
        {minRange > 0 && <div className="text-xs text-primary mt-1">≥ {minRange} км</div>}
      </FilterGroup>

      <FilterGroup label="Бусад шүүлтүүр">
        <label className="flex items-center gap-2.5 text-sm cursor-pointer px-3 py-2 rounded-lg hover:bg-white/[0.04]">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="accent-primary rounded"
          />
          Зөвхөн нөөцтэй
        </label>
        <label className="flex items-center gap-2.5 text-sm cursor-pointer px-3 py-2 rounded-lg hover:bg-white/[0.04]">
          <input
            type="checkbox"
            checked={hasDiscount}
            onChange={(e) => setHasDiscount(e.target.checked)}
            className="accent-primary rounded"
          />
          Хямдралтай
        </label>
      </FilterGroup>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="container mx-auto px-4 pt-10 pb-6">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">Дэлгүүр</h1>
            <p className="text-muted-foreground text-sm mt-1">{filtered.length} бүтээгдэхүүн</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(true)}
              className="lg:hidden btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" /> Шүүлтүүр
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 rounded-xl border border-border/60 bg-card text-sm appearance-none pr-8 cursor-pointer focus:border-primary/40 focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <div className="sticky top-28 p-5 rounded-2xl bg-card border border-border/60">
              {FiltersPanel}
            </div>
          </aside>

          {filterOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setFilterOpen(false)}
            >
              <div
                className="absolute right-0 top-0 h-full w-80 max-w-full bg-background border-l border-border/60 p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Шүүлтүүр</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="w-8 h-8 rounded-lg grid place-items-center hover:bg-white/[0.06]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {FiltersPanel}
              </div>
            </div>
          )}

          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-card mx-auto grid place-items-center mb-4 border border-border/60">
                  <Search className="w-6 h-6" />
                </div>
                <p className="mb-4">Тохирох бүтээгдэхүүн олдсонгүй.</p>
                <Link
                  to="/products"
                  search={{}}
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                >
                  Шүүлтүүр цэвэрлэх
                </Link>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
                {filtered.length > 9 && (
                  <div className="mt-10 text-center">
                    <button className="btn-outline px-8 py-3 text-sm font-medium">Цааш үзэх</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="pb-4 border-b border-border/40 last:border-b-0">
      <div className="font-semibold text-sm mb-3 text-foreground/80">{label}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default ProductsPage;
