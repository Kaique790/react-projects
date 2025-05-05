import { api } from "@/lib/axios";

export interface registerRestaurantBody {
  restuarantName: string;
  managerName: string;
  phone: string;
  email: string;
}

export async function registerRestaurant(body: registerRestaurantBody) {
  await api.post("/restaurants", {
    email: body.email,
    managerName: body.managerName,
    phone: body.phone,
    restuarantName: body.restuarantName,
  });
}
