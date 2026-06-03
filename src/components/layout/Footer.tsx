import { Link } from "@tanstack/react-router";
import { Zap, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
              <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="font-display font-bold text-lg">
              Mini<span className="text-primary"> Motors</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground">
            Mini Motors — цахилгаан дугуй, скүүтер болон дагалдах хэрэгслийн онлайн дэлгүүр.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Дэлгүүр</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/products" className="hover:text-foreground">
                Бүх бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-foreground">
                Ангилал
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-foreground">
                Захиалга мөшгөх
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Тусламж</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Холбоо барих
              </Link>
            </li>
            <li>
              <Link to="/payment-info" className="hover:text-foreground">
                Төлбөрийн мэдээлэл
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-foreground">
                Хүргэлт
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Холбоо барих</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +976 XXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@minimotors.mn
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Улаанбаатар хот
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mini Motors. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
}
