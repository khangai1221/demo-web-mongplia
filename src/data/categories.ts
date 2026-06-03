import { Bike, Zap, Wrench, ShoppingBag, Baby, Settings2 } from "lucide-react";

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: typeof Bike;
}

export const categories: Category[] = [
  { id: "1", slug: "tsahilgaan-skuuter", name: "Цахилгаан скүүтер", description: "Дугуйтай болон суудалтай скүүтер", icon: Zap },
  { id: "2", slug: "tsahilgaan-dugui", name: "Цахилгаан дугуй", description: "Хотын болон уулын цахилгаан дугуй", icon: Bike },
  { id: "3", slug: "dagaldah-heregsel", name: "Дагалдах хэрэгсэл", description: "Дуулга, цоож, гэрэл", icon: ShoppingBag },
  { id: "4", slug: "selbeg-heregsel", name: "Сэлбэг хэрэгсэл", description: "Батерей, цэнэглэгч, сэлбэг", icon: Wrench },
  { id: "5", slug: "huuhdiin-tsahilgaan-unaa", name: "Хүүхдийн цахилгаан унаа", description: "Хүүхдэд зориулсан", icon: Baby },
  { id: "6", slug: "zasvar-uilchilgee", name: "Засвар үйлчилгээ", description: "Мэргэжлийн засвар", icon: Settings2 },
];