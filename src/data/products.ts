import ebike1 from "@/assets/product-ebike-1.jpg";
import ebike2 from "@/assets/product-ebike-2.jpg";
import scooter1 from "@/assets/product-scooter-1.jpg";
import scooter2 from "@/assets/product-scooter-2.jpg";
import kids from "@/assets/product-kids.jpg";
import accessory from "@/assets/product-accessory.jpg";
import battery from "@/assets/product-battery.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  brand: string;
  price: number;
  discountPrice?: number;
  stock: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  motorPower: string;
  battery: string;
  rangeKm: number;
  maxSpeed: number;
  loadCapacity: string;
  weight: string;
  wheelSize: string;
  chargingTime: string;
  warranty: string;
  colorOptions: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  views?: number;
  sold?: number;
  specs?: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "mini-x1-electric-scooter",
    name: "Mini X1 Electric Scooter",
    categorySlug: "tsahilgaan-skuuter",
    categoryName: "Цахилгаан скүүтер",
    brand: "Mini Motors",
    price: 1_490_000,
    stock: 15,
    shortDescription: "Хотын өдөр тутмын унаанд тохиромжтой",
    fullDescription:
      "Mini X1 Electric Scooter нь хотын өдөр тутмын зорчилтонд зориулагдсан, авсаархан, хөнгөн, тав тухтай цахилгаан скүүтер юм. Хүчирхэг 350W мотор, 36V батерейгаар 35 км хүртэлх зайг туулах боломжтой. Эвхэгддэг загвар нь тээвэрлэх, хадгалахад хялбар.",
    images: [scooter1, scooter2],
    motorPower: "350W",
    battery: "36V",
    rangeKm: 35,
    maxSpeed: 25,
    loadCapacity: "100 кг",
    weight: "13 кг",
    wheelSize: '8.5"',
    chargingTime: "3-4 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар", "Цагаан"],
    isFeatured: true,
    isNew: true,
    views: 850,
    sold: 42,
    specs: [
      { label: "Явах зай", value: "35 км" },
      { label: "Хурд", value: "25 км/ц" },
      { label: "Батерей", value: "36V" },
      { label: "Мотор", value: "350W" },
    ],
  },
  {
    id: "p2",
    slug: "mini-pro-s2-scooter",
    name: "Mini Pro S2 Scooter",
    categorySlug: "tsahilgaan-skuuter",
    categoryName: "Цахилгаан скүүтер",
    brand: "Mini Motors",
    price: 2_190_000,
    discountPrice: 1_990_000,
    stock: 10,
    shortDescription: "Илүү хүчтэй, илүү тав тухтай загвар",
    fullDescription:
      "Mini Pro S2 нь илүү хүчирхэг 500W мотор, 48V батерейгаар тоноглогдсон, өндөр хурдтай, хол зайд явах чадвартай скүүтер юм. 55 км хүртэлх зайг туулж, 35 км/ц хурдлах чадвартай. Суудалтай загвар нь илүү тав тухтай явах боломжийг олгоно.",
    images: [scooter2, scooter1],
    motorPower: "500W",
    battery: "48V",
    rangeKm: 55,
    maxSpeed: 35,
    loadCapacity: "120 кг",
    weight: "18 кг",
    wheelSize: '10"',
    chargingTime: "4-5 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар", "Саарал"],
    isFeatured: true,
    isBestSeller: true,
    isSale: true,
    views: 2300,
    sold: 156,
    specs: [
      { label: "Явах зай", value: "55 км" },
      { label: "Хурд", value: "35 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "500W" },
    ],
  },
  {
    id: "p3",
    slug: "mini-rider-e-bike",
    name: "Mini Rider E-Bike",
    categorySlug: "tsahilgaan-dugui",
    categoryName: "Цахилгаан дугуй",
    brand: "Mini Motors",
    price: 2_990_000,
    stock: 8,
    shortDescription: "Цахилгаан дугуйн шинэ үе",
    fullDescription:
      "Mini Rider E-Bike нь хотын болон хөдөөгийн замд ашиглах боломжтой, өндөр чанартай цахилгаан дугуй юм. 500W мотор, 48V батерейгаар 60 км хүртэлх зайг туулна. Тав тухтай суудал, найдвартай тоормосны системээр тоноглогдсон.",
    images: [ebike1, ebike2],
    motorPower: "500W",
    battery: "48V",
    rangeKm: 60,
    maxSpeed: 32,
    loadCapacity: "130 кг",
    weight: "22 кг",
    wheelSize: '26"',
    chargingTime: "4-5 цаг",
    warranty: "2 жил",
    colorOptions: ["Хар", "Цэнхэр"],
    isFeatured: true,
    isBestSeller: true,
    views: 1800,
    sold: 98,
    specs: [
      { label: "Явах зай", value: "60 км" },
      { label: "Хурд", value: "32 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "500W" },
    ],
  },
  {
    id: "p4",
    slug: "mini-cargo-e-bike",
    name: "Mini Cargo E-Bike",
    categorySlug: "tsahilgaan-dugui",
    categoryName: "Цахилгаан дугуй",
    brand: "Mini Motors",
    price: 3_490_000,
    discountPrice: 3_190_000,
    stock: 5,
    shortDescription: "Ачаа болон хүргэлтэд тохиромжтой",
    fullDescription:
      "Mini Cargo E-Bike нь ачаа тээвэрлэх зориулалттай, хүчирхэг 750W мотортой цахилгаан дугуй юм. 70 км хүртэлх зайг туулж, 150 кг хүртэлх ачааг тээвэрлэх боломжтой. Хүргэлтийн үйлчилгээнд хамгийн тохиромжтой сонголт.",
    images: [ebike2, ebike1],
    motorPower: "750W",
    battery: "48V",
    rangeKm: 70,
    maxSpeed: 30,
    loadCapacity: "150 кг",
    weight: "28 кг",
    wheelSize: '20"',
    chargingTime: "5-6 цаг",
    warranty: "2 жил",
    colorOptions: ["Хар"],
    isFeatured: true,
    isSale: true,
    views: 950,
    sold: 45,
    specs: [
      { label: "Явах зай", value: "70 км" },
      { label: "Хурд", value: "30 км/ц" },
      { label: "Батерей", value: "48V" },
      { label: "Мотор", value: "750W" },
    ],
  },
  {
    id: "p5",
    slug: "mini-kids-electric-ride",
    name: "Mini Kids Electric Ride",
    categorySlug: "huuhdiin-tsahilgaan-unaa",
    categoryName: "Хүүхдийн цахилгаан унаа",
    brand: "Mini Motors",
    price: 890_000,
    stock: 20,
    shortDescription: "Хүүхдийн аюулгүй цахилгаан унаа",
    fullDescription:
      "Mini Kids Electric Ride нь 6-12 насны хүүхдэд зориулсан, аюулгүй, удаан хурдтай цахилгаан скүүтер юм. 250W мотор, 24V батерейгаар 20 км хүртэлх зайг туулах боломжтой. Аюулгүй байдлыг хангасан загвар.",
    images: [kids],
    motorPower: "250W",
    battery: "24V",
    rangeKm: 20,
    maxSpeed: 15,
    loadCapacity: "50 кг",
    weight: "8 кг",
    wheelSize: '6"',
    chargingTime: "2-3 цаг",
    warranty: "6 сар",
    colorOptions: ["Цэнхэр", "Ягаан"],
    isNew: true,
    views: 420,
    sold: 28,
    specs: [
      { label: "Явах зай", value: "20 км" },
      { label: "Хурд", value: "15 км/ц" },
      { label: "Батерей", value: "24V" },
      { label: "Мотор", value: "250W" },
    ],
  },
  {
    id: "p6",
    slug: "smart-helmet-pro",
    name: "Smart Helmet Pro",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 180_000,
    discountPrice: 150_000,
    stock: 30,
    shortDescription: "LED гэрэлтэй хамгаалалтын дуулга",
    fullDescription:
      "Smart Helmet Pro нь LED гэрэлтэй, тохируулж болдог, гэрчилгээжсэн хамгаалалтын дуулга юм. Шөнийн цагаар явахад харагдах байдлыг хангах LED гэрэлтэй. Бүх насны хэрэглэгчдэд тохирно.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.6 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар", "Цагаан"],
    isSale: true,
    views: 680,
    sold: 120,
    specs: [
      { label: "Төрөл", value: "Дагалдах хэрэгсэл" },
      { label: "Хэмжээ", value: "Тохируулдаг" },
      { label: "Гэрэл", value: "LED" },
      { label: "Аюулгүй байдал", value: "Гэрчилгээжсэн" },
    ],
  },
  {
    id: "p7",
    slug: "scooter-lock-max",
    name: "Scooter Lock Max",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 85_000,
    stock: 50,
    shortDescription: "Бат бөх хамгаалалтын түгжээ",
    fullDescription:
      "Scooter Lock Max нь өндөр чанартай гангаар хийгдсэн, бат бөх хамгаалалтын түгжээ юм. Скүүтер болон цахилгаан дугуйндаа хэрэглэхэд тохиромжтой. Хулгайгаас хамгаалах найдвартай шийдэл.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "1.2 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар"],
    views: 320,
    sold: 85,
    specs: [
      { label: "Төрөл", value: "Цоож" },
      { label: "Материал", value: "Ган" },
      { label: "Аюулгүй байдал", value: "Өндөр" },
      { label: "Хэрэглээ", value: "Скүүтер/Дугуй" },
    ],
  },
  {
    id: "p8",
    slug: "fast-charger-48v",
    name: "Fast Charger 48V",
    categorySlug: "selbeg-heregsel",
    categoryName: "Сэлбэг хэрэгсэл",
    brand: "Mini Motors",
    price: 160_000,
    stock: 25,
    shortDescription: "Цахилгаан унааны хурдан цэнэглэгч",
    fullDescription:
      "Fast Charger 48V нь цахилгаан дугуй болон скүүтерт зориулсан хурдан цэнэглэгч юм. 48V системд тохирсон, аюулгүй хамгаалалттай. Цэнэглэх хугацааг эрс багасгана.",
    images: [battery],
    motorPower: "-",
    battery: "48V",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.8 кг",
    wheelSize: "-",
    chargingTime: "2-3 цаг",
    warranty: "6 сар",
    colorOptions: ["Хар"],
    views: 280,
    sold: 55,
    specs: [
      { label: "Төрөл", value: "Цэнэглэгч" },
      { label: "Вольт", value: "48V" },
      { label: "Хурд", value: "Хурдан цэнэглэлт" },
      { label: "Хэрэглээ", value: "Дугуй/Скүүтер" },
    ],
  },
  {
    id: "p9",
    slug: "mini-battery-pack",
    name: "Mini Battery Pack",
    categorySlug: "selbeg-heregsel",
    categoryName: "Сэлбэг хэрэгсэл",
    brand: "Mini Motors",
    price: 590_000,
    discountPrice: 520_000,
    stock: 7,
    shortDescription: "Нэмэлт батерей",
    fullDescription:
      "Mini Battery Pack нь 48V 15Ah литиум-ион нэмэлт батерей юм. Таны цахилгаан унааны явах зайг +35 км-ээр нэмэгдүүлэх боломжтой. Хурдан солих загвар.",
    images: [battery],
    motorPower: "-",
    battery: "48V 15Ah",
    rangeKm: 35,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "3.5 кг",
    wheelSize: "-",
    chargingTime: "4 цаг",
    warranty: "1 жил",
    colorOptions: ["Хар"],
    isSale: true,
    views: 190,
    sold: 35,
    specs: [
      { label: "Төрөл", value: "Батерей" },
      { label: "Вольт", value: "48V" },
      { label: "Багтаамж", value: "15Ah" },
      { label: "Зай нэмэгдүүлэлт", value: "+35 км" },
    ],
  },
  {
    id: "p10",
    slug: "urban-rider-gloves",
    name: "Urban Rider Gloves",
    categorySlug: "dagaldah-heregsel",
    categoryName: "Дагалдах хэрэгсэл",
    brand: "Mini Motors",
    price: 65_000,
    stock: 40,
    shortDescription: "Унааны хамгаалалтын бээлий",
    fullDescription:
      "Urban Rider Gloves нь өдөр тутмын унаанд зориулсан, удаан эдэлгээтэй, гулсалтаас хамгаалах атгагчтай бээлий юм. Салхи үл нэвтрүүлэх материал, тав тухтай тохируулга.",
    images: [accessory],
    motorPower: "-",
    battery: "-",
    rangeKm: 0,
    maxSpeed: 0,
    loadCapacity: "-",
    weight: "0.2 кг",
    wheelSize: "-",
    chargingTime: "-",
    warranty: "30 хоног",
    colorOptions: ["Хар", "Саарал"],
    views: 150,
    sold: 65,
    specs: [
      { label: "Төрөл", value: "Дагалдах хэрэгсэл" },
      { label: "Материал", value: "Удаан эдэлгээтэй" },
      { label: "Атгагч", value: "Гулсалтаас хамгаалах" },
      { label: "Хэрэглээ", value: "Өдөр тутмын" },
    ],
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getRelatedProducts = (p: Product) =>
  products.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, 4);
