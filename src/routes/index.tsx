import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Sparkles,
  CreditCard,
  Wallet,
  Building2,
  ChevronDown,
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
      {/* HERO */}
      <section className="bg-gray-50 min-h-[60vh] md:min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium mb-4 md:mb-5 text-blue-600">
                <Sparkles className="w-3.5 h-3.5" />
                2026 оны шинэ цуглуулга
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 md:mb-5 text-gray-900">
                Цахилгаан унааны
                <br />
                <span className="text-blue-600">шинэ үе</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mb-6 md:mb-8 leading-relaxed">
                Mini Motors — цахилгаан скүүтер, цахилгаан дугуй болон дагалдах хэрэгслийн онлайн
                дэлгүүр.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Бүтээгдэхүүн үзэх <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Дэлгүүр нээх
                </Link>
              </div>
              <div className="mt-8 md:mt-10 flex gap-6 md:gap-8">
                {[
                  { n: "10K+", l: "Хэрэглэгч" },
                  { n: "200+", l: "Бүтээгдэхүүн" },
                  { n: "98%", l: "Сэтгэл ханамж" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl md:text-2xl font-bold text-blue-600">{s.n}</div>
                    <div className="text-[11px] md:text-xs text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <div className="rounded-3xl overflow-hidden border border-gray-200">
                <img
                  src={heroImg}
                  alt="Цахилгаан унаа"
                  width={1600}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section title="Бүтээгдэхүүний ангилал">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
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
                  className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-50 grid place-items-center mb-2.5 md:mb-3">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                  </div>
                  <div className="font-semibold text-xs sm:text-sm text-gray-900">{c.name}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* SALE ITEMS */}
      <Section title="Хямдралтай" link={{ to: "/products", label: "Бүгдийг үзэх" }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {saleItems.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Яагаад Mini Motors?
            </h2>
            <p className="text-sm md:text-base text-gray-500">Бидний давуу талууд</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
              <div key={f.t} className="p-5 md:p-6 rounded-xl bg-white border border-gray-200">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-blue-50 text-blue-600 grid place-items-center mb-3">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold mb-1 text-sm md:text-base text-gray-900">{f.t}</div>
                <div className="text-xs md:text-sm text-gray-500">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <Section title="Онцлох бүтээгдэхүүн" link={{ to: "/products", label: "Бүгдийг үзэх" }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* PAYMENTS & DELIVERY */}
      <section className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-5 md:p-8 rounded-2xl bg-white border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
            Төлбөрийн төрлүүд
          </h3>
          <ul className="space-y-2 md:space-y-3 text-sm">
            <PayRow icon={Building2} label="Дансаар шилжүүлэх" />
            <PayRow icon={Wallet} label="Бэлнээр төлөх" />
            <PayRow icon={CreditCard} label="StorePay-р хуваан төлөх" badge="хүсэлт" />
            <PayRow icon={CreditCard} label="Pocket Zero-р хуваан төлөх" badge="хүсэлт" />
            <PayRow icon={CreditCard} label="QPay" badge="удахгүй" />
          </ul>
        </div>
        <div className="p-5 md:p-8 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
            Хүргэлтийн мэдээлэл
          </h3>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              Улаанбаатар хот дотор — 24 цагт
            </li>
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              Орон нутаг руу — 3-5 хоног
            </li>
            <li className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
              Дэлгүүрээс өөрөө авах боломжтой
            </li>
          </ul>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-4 md:mt-6 px-5 py-3 text-sm font-semibold bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            Захиалга өгөх <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <Section title="Шинэ ирсэн">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
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
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="rounded-2xl p-6 md:p-12 bg-gray-900 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">
            Цахилгаан унааны мэргэжилтнүүдтэй холбогдоорой
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-4 md:mb-6">
            Танд тохирох цахилгаан унааг сонгоход бид туслана.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
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
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 flex-wrap">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-xs md:text-base text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {link && (
          <Link
            to={link.to}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
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
    <li className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200">
      <span className="flex items-center gap-3 text-sm text-gray-700">
        <Icon className="w-4 h-4 text-blue-600" />
        {label}
      </span>
      {badge && (
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">
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
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left"
      >
        <span className="font-medium text-sm md:text-base text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-gray-400 transition ${open ? "rotate-180 text-blue-600" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-gray-500">{a}</div>
      )}
    </div>
  );
}
