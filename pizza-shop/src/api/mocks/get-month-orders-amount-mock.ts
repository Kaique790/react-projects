import { http, HttpResponse } from "msw";
import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const geMonthOrderAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: 3,
  });
});
