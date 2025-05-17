import { api } from "@/lib/axios";

interface GetOrdersQuery {
  pageIndex?: number | null;
}

interface OrderData {
  orders: {
    orderId: string;
    createdAt: "string";
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
}: GetOrdersQuery): Promise<OrderData> {
  const response = await api.get("/orders", {
    params: {
      pageIndex,
    },
  });
  return response.data;
}
