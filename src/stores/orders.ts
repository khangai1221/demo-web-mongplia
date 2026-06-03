import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "./cart";

export type PaymentMethod =
  | "manual_bank"
  | "cash"
  | "store_pickup_payment"
  | "storepay_request"
  | "pocket_zero_request"
  | "qpay";

export type OrderStatus =
  | "New" | "Pending Payment" | "Pending Verification" | "Paid"
  | "Processing" | "Ready for Delivery" | "Shipped" | "Delivered"
  | "Completed" | "Cancelled";

export type PaymentStatus = "Unpaid" | "Pending" | "Proof Uploaded" | "Paid" | "Failed" | "Refunded";
export type DeliveryStatus = "Not Started" | "Preparing" | "Ready" | "Shipped" | "Delivered";

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  city: string;
  district: string;
  address: string;
  customerNote?: string;
  deliveryMethod: string;
  deliveryFee: number;
  items: CartItem[];
  subtotal: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  deliveryStatus: DeliveryStatus;
  proofFileName?: string;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  add: (o: Order) => void;
  attachProof: (orderNumber: string, fileName: string) => void;
  findBy: (q: { orderNumber?: string; phone?: string }) => Order | undefined;
}

export const useOrders = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      add: (o) => set((s) => ({ orders: [o, ...s.orders] })),
      attachProof: (orderNumber, fileName) =>
        set((s) => ({
          orders: s.orders.map((o) =>
            o.orderNumber === orderNumber
              ? { ...o, proofFileName: fileName, paymentStatus: "Proof Uploaded", orderStatus: "Pending Verification" }
              : o,
          ),
        })),
      findBy: ({ orderNumber, phone }) =>
        get().orders.find(
          (o) =>
            (orderNumber && o.orderNumber.toLowerCase() === orderNumber.toLowerCase()) ||
            (phone && o.customerPhone === phone),
        ),
    }),
    { name: "mm-orders" },
  ),
);
