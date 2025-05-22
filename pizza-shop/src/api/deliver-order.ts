import { api } from "@/lib/axios";

interface DeliverOrderQuery {
  orderId: string;
}

export async function deliverOrder({ orderId }: DeliverOrderQuery) {
  await api.patch(`/orders/${orderId}/deliver`);
}
