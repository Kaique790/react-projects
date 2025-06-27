import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SignIn } from "./SignIn";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={["/sign-in?email=kiaqbs@gmail.com"]}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu E-mail") as HTMLInputElement;

    expect(emailInput.value).toEqual("kiaqbs@gmail.com");

    wrapper.debug();
  });
});
