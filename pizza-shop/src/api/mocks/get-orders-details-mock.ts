import { http, HttpResponse } from "msw";
import type {
  GetOrderDetailsParams,
  OrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  OrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      email: "email@gnmail.com",
      name: "exemplos",
      phone: "876356315",
    },
    createdAt: new Date().toISOString(),
    status: "pending",
    totalInCents: 20000,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 10000,
        product: {
          name: "30 queijos",
        },
        quantity: 1,
      },
      {
        id: "order-item-2",
        priceInCents: 5000,
        product: {
          name: "Pizza doce",
        },
        quantity: 2,
      },
    ],
  });
});
