import { api } from "@/lib/axios";

interface CancelOrderQuery {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrderQuery) {
  await api.patch(`/orders/${orderId}/cancel`);
}
