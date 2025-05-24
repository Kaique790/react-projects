import { api } from "@/lib/axios";

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: string;
}[];

export async function getDailyRevenueInPeriod() {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    "/metrics/daily-receipt-in-period",
  );

  return response.data;
}
