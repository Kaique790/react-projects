import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-resturant-mock";
import { getDayOrderAmountMock } from "./get-day-order-amount-mock";
import { geMonthRevenueMock } from "./get-month-revenue-mock";
import { geMonthOrderAmountMock } from "./get-month-orders-amount-mock";
import { geMonthCanceledOrderAmountMock } from "./get-month-canceled-orders-amount-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { updateProfiletMock } from "./update-profile-mock";
import { getProfileMock } from "./get-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getOrdersMock } from "./get-orders-mock";

export const moker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrderAmountMock,
  geMonthRevenueMock,
  geMonthOrderAmountMock,
  geMonthCanceledOrderAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  updateProfiletMock,
  getProfileMock,
  getManagedRestaurantMock,
  getOrdersMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await moker.start();
}
