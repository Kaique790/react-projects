import { http, HttpResponse } from "msw";
import { GetMonthRevenueResponse } from "../get-month-revenue";

export const geMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 21300,
    diffFromLastMonth: 10,
  });
});
