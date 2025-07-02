import { http, HttpResponse } from "msw";
import type { GetProfileData } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileData>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "user-id",
      createdAt: new Date(),
      email: "kiaqb@hmail.com",
      name: "João",
      phone: "79 9999-9999",
      role: "manager",
      updatedAt: null,
    });
  },
);
