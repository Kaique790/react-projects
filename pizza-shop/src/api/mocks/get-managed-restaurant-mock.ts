import { http, HttpResponse } from "msw";
import { GetManagedRestaurantData } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantData
>("/me", () => {
  return HttpResponse.json({
    managerId: "manager-id",
    id: "restaurant-id",
    createdAt: new Date(),
    name: "Pizzas - SE",
    description: "O restuarante dos sonhos",
    updatedAt: null,
  });
});
