import { http, HttpResponse } from "msw";
import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "pizza 2", amount: 2 },
    { product: "pizza 3", amount: 2 },
    { product: "pizza 23", amount: 8 },
    { product: "pizza 52", amount: 12 },
    { product: "pizza 23", amount: 2 },
    { product: "pizza 42", amount: 1 },
  ]);
});
