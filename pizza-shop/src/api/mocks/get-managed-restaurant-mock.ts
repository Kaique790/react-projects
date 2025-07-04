import { http, HttpResponse } from "msw";
import { GetManagedRestaurantData } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantData
>("/managed-restaurant", () => {
  return HttpResponse.json({
    managerId: "manager-id",
    id: "restaurant-id",
    createdAt: new Date(),
    name: "Pizzas - SE",
    description: "O restaurante dos sonhos",
    updatedAt: null,
  });
});
