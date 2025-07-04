import { api } from "@/lib/axios";

interface GetOrdersQuery {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

export interface OrderData {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersQuery): Promise<OrderData> {
  const response = await api.get("/orders", {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  });
  return response.data;
}
