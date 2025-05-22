import { api } from "@/lib/axios";

interface ApproveOrderQuery {
  orderId: string;
}

export async function approveOrder({ orderId }: ApproveOrderQuery) {
  await api.patch(`/orders/${orderId}/approve`);
}
