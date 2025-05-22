import { api } from "@/lib/axios";

interface DispatchOrderQuery {
  orderId: string;
}

export async function dispatchOrder({ orderId }: DispatchOrderQuery) {
  await api.patch(`/orders/${orderId}/dispatch`);
}
