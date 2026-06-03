import { createFileRoute } from "@tanstack/react-router";
import { Truck, ShieldCheck, Clock, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/delivery")({
  head: () => ({ meta: [{ title: "Хүргэлт — Mini Motors" }] }),
  component: DeliveryInfo,
});

function DeliveryInfo() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl font-bold mb-2">Хүргэлтийн мэдээлэл</h1>
      <p className="text-muted-foreground mb-8">Бидний хүргэлтийн нөхцөл, хугацаа</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: Clock,
            t: "Улаанбаатар дотор",
            d: "24 цагт хүргэнэ",
            c: "500,000₮-с дээш захиалга үнэгүй",
          },
          { icon: Truck, t: "Орон нутаг руу", d: "3-5 ажлын өдөр", c: "Автобус, хувийн тээвэр" },
          { icon: MapPin, t: "Дэлгүүрээс авах", d: "Захиалга өгсөн өдрөө", c: "10:00-19:00 цаг" },
        ].map((item) => (
          <div key={item.t} className="p-6 rounded-2xl bg-card border border-border/60">
            <item.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-1">{item.t}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.d}</p>
            <p className="text-xs text-primary">{item.c}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl space-y-4">
        <h2 className="font-display text-2xl font-bold mb-4">Хүргэлтийн нөхцөл</h2>
        {[
          "Улаанбаатар хот дотор 500,000₮-с дээш захиалга үнэгүй хүргэлттэй.",
          "500,000₮-с доош захиалгад 15,000₮ хүргэлтийн төлбөртэй.",
          "Орон нутаг руу 35,000₮ хүргэлтийн төлбөртэй.",
          "Хүргэлт хийхээс өмнө захиалагчтай холбогдож баталгаажуулна.",
          "Дэлгүүрээс өөрөө авах бол 10:00-19:00 цагийн хооронд авах боломжтой.",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/60"
          >
            <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
