import { api } from "@/lib/axios";

interface getManagedRestaurantData {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<getManagedRestaurantData>(
    "/managed-restaurant",
  );
  return response.data;
}
