import { http, HttpResponse } from "msw";
import { registerRestaurantBody } from "../register-restaurant";

export const registerRestaurantMock = http.post<never, registerRestaurantBody>(
  "/restaurants",
  async ({ request }) => {
    const { restuarantName } = await request.json();

    if (restuarantName === "Pizza Shop") {
      return new HttpResponse(null, { status: 201 });
    }

    return new HttpResponse(null, {
      status: 401,
    });
  },
);
