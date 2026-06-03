import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Ангилал — Mini Motors" },
      { name: "description", content: "Mini Motors-ийн бүтээгдэхүүний ангилалууд." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Бүтээгдэхүүний ангилал</h1>
      <p className="text-muted-foreground mb-10">Танд хэрэгтэй ангилалаа сонгоно уу.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.id} to="/products" search={{ category: c.slug }} className="group p-8 rounded-3xl bg-card border border-border hover:shadow-elegant hover:border-primary transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4 shadow-glow">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
