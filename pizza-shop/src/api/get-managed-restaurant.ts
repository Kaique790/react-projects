import { api } from "@/lib/axios";

export interface GetManagedRestaurantData {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantData>(
    "/managed-restaurant",
  );
  return response.data;
}
