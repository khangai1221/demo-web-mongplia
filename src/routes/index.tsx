import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Sparkles,
  Battery,
  Gauge,
  Zap,
  CreditCard,
  Wallet,
  Building2,
  ChevronDown,
  ZapIcon,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-ebike.jpg";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { formatMNT } from "@/lib/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mini Motors — Цахилгаан унааны шинэ үе" },
      {
        name: "description",
        content: "Цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн Монголын онлайн дэлгүүр.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const saleItems = products.filter((p) => p.isSale).slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-hero text-foreground min-h-[80vh] flex items-center">
        {/* Background glow */}
        <div className="absolute inset-0 bg-neon-glow pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_20%,oklch(0.82_0.22_145/0.3),transparent_50%)]" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/products" className="hover:text-foreground transition-colors">
              All Collections
            </Link>
            <span className="mx-2">›</span>
            <span className="text-muted-foreground/70">Products</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs font-medium mb-5 text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                2026 оны шинэ цуглуулга
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 text-balance">
                Цахилгаан унааны
                <br />
                <span className="text-primary">шинэ үе</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Mini Motors — цахилгаан скүүтер, цахилгаан дугуй болон дагалдах хэрэгслийн онлайн
                дэлгүүр.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
                >
                  Бүтээгдэхүүн үзэх <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 text-sm text-foreground hover:text-primary"
                >
                  Дэлгүүр нээх
                </Link>
              </div>
              <div className="mt-10 flex gap-8">
                {[
                  { n: "10K+", l: "Хэрэглэгч" },
                  { n: "200+", l: "Бүтээгдэхүүн" },
                  { n: "98%", l: "Сэтгэл ханамж" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-primary">{s.n}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_0_80px_oklch(0.82_0.22_145/0.15)]">
                <img
                  src={heroImg}
                  alt="Цахилгаан унаа"
                  width={1600}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border/60 rounded-2xl p-4 shadow-elegant backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 grid place-items-center">
                    <ZapIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Шинэ цуглуулга</div>
                    <div className="text-xs text-muted-foreground">2026 оны загварууд</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section
        title="Бүтээгдэхүүний ангилал"
        subtitle="Цахилгаан унааны бүх төрлийн бүтээгдэхүүн нэг дороос"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="font-semibold text-sm leading-tight">{c.name}</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">{c.description}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* SALE ITEMS */}
      <Section
        title="Хямдралтай бүтээгдэхүүн"
        subtitle="Хязгаарлагдмал хугацааны тусгай үнэ"
        link={{ to: "/products", label: "Бүгдийг үзэх" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {saleItems.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Яагаад Mini Motors?</h2>
          <p className="text-muted-foreground">Бидний давуу талууд</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              icon: ShieldCheck,
              t: "Албан ёсны баталгаа",
              d: "Бүх бүтээгдэхүүнд 1-2 жилийн баталгаа",
            },
            {
              icon: Truck,
              t: "Хурдан хүргэлт",
              d: "УБ дотор 24 цагт, орон нутаг 3-5 хоног",
            },
            {
              icon: Headphones,
              t: "24/7 дэмжлэг",
              d: "Утсаар болон чатаар тусална",
            },
            {
              icon: Sparkles,
              t: "Чанартай засвар",
              d: "Мэргэжлийн засварчид",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 glow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold mb-1">{f.t}</div>
              <div className="text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <Section
        title="Онцлох бүтээгдэхүүн"
        subtitle="2026 оны хамгийн сүүлийн загварууд"
        link={{ to: "/products", label: "Бүгдийг үзэх" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* PAYMENTS & DELIVERY */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border/60">
          <h3 className="font-display text-2xl font-bold mb-4 text-primary">Төлбөрийн төрлүүд</h3>
          <ul className="space-y-3 text-sm">
            <PayRow icon={Building2} label="Дансаар шилжүүлэх" />
            <PayRow icon={Wallet} label="Бэлнээр төлөх" />
            <PayRow icon={CreditCard} label="StorePay-р хуваан төлөх" badge="хүсэлт" />
            <PayRow icon={CreditCard} label="Pocket Zero-р хуваан төлөх" badge="хүсэлт" />
            <PayRow icon={CreditCard} label="QPay" badge="удахгүй" />
          </ul>
        </div>
        <div className="p-8 rounded-3xl bg-gradient-hero text-foreground border border-border">
          <h3 className="font-display text-2xl font-bold mb-4">Хүргэлтийн мэдээлэл</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              Улаанбаатар хот дотор — 24 цагт
            </li>
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              Орон нутаг руу — 3-5 хоног
            </li>
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-primary shrink-0" />
              Дэлгүүрээс өөрөө авах боломжтой
            </li>
          </ul>
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 mt-6 px-5 py-3 text-sm"
          >
            Захиалга өгөх <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <Section title="Шинэ ирсэн" subtitle="2026 оны хамгийн сүүлийн загварууд">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Түгээмэл асуултууд">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-10 md:p-16 bg-gradient-hero text-center border border-border shadow-[0_0_60px_oklch(0.82_0.22_145/0.1)]">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Цахилгаан унааны мэргэжилтнүүдтэй холбогдоорой
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Танд тохирох цахилгаан унааг сонгоход бид туслана.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm"
          >
            Холбоо барих <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  subtitle,
  link,
  children,
}: {
  title: string;
  subtitle?: string;
  link?: { to: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {link && (
          <Link
            to={link.to}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            {link.label} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

function PayRow({
  icon: Icon,
  label,
  badge,
}: {
  icon: typeof CreditCard;
  label: string;
  badge?: string;
}) {
  return (
    <li className="flex items-center justify-between p-3 rounded-xl bg-background border border-border/60">
      <span className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-primary" />
        {label}
      </span>
      {badge && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-warning/20 text-warning-foreground">
          {badge}
        </span>
      )}
    </li>
  );
}

const faqs = [
  {
    q: "Бүтээгдэхүүний баталгаат хугацаа хэд вэ?",
    a: "Цахилгаан дугуй, скүүтерт 1-2 жилийн албан ёсны баталгаа олгоно. Батерейд 1 жил.",
  },
  {
    q: "Хүргэлтийн хугацаа?",
    a: "Улаанбаатар хот дотор 24 цагт, орон нутаг руу 3-5 ажлын өдөрт хүргэнэ.",
  },
  {
    q: "Хуваан төлөлт хийх боломжтой юу?",
    a: "StorePay болон Pocket Zero үйлчилгээгээр хуваан төлөх хүсэлт авна. Манай ажилтан тантай холбогдоно.",
  },
  {
    q: "Төлбөр хэрхэн төлөх вэ?",
    a: "Дансаар шилжүүлэх, бэлнээр болон дэлгүүр дээр төлөх боломжтой. QPay удахгүй нэмэгдэнэ.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-2xl bg-card overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 transition ${open ? "rotate-180 text-primary" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
