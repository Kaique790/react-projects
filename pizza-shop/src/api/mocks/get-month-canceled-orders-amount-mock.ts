import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const geMonthCanceledOrderAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 330,
    diffFromLastMonth: 3,
  });
});
