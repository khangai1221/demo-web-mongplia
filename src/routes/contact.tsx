import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Холбоо барих — Mini Motors" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Холбоо барих</h1>
      <p className="text-muted-foreground mb-8">Бид тантай ярилцахдаа баяртай байх болно.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <Info icon={Phone} label="Утас" value="+976 XXXXXXXX" />
        <Info icon={Mail} label="Имэйл" value="info@minimotors.mn" />
        <Info icon={MapPin} label="Хаяг" value="Улаанбаатар хот, Монгол улс" />
        <Info icon={Facebook} label="Facebook" value="Mini Motors" />
        <Info icon={Instagram} label="Instagram" value="minimotors.mn" />
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-card flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center"><Icon className="w-5 h-5" /></div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
