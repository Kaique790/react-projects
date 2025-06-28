import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderTableFilters } from "./OrderTableFilters";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.search}</div>;
}

describe("Order Table Filters", () => {
  it("should put filters in url after submit", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/orders"]}>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <OrderTableFilters />
                <LocationDisplay />
              </>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    const customerNameInput = screen.getByPlaceholderText("Nome do Cliente");
    const orderIdInput = screen.getByPlaceholderText("ID do pedido");

    const buttonSubmit = screen.getByRole("button", {
      name: /filtrar resultados/i,
    });

    await user.type(customerNameInput, "Jao");
    await user.type(orderIdInput, "12");

    await user.click(buttonSubmit);

    await waitFor(() => {
      expect(screen.getByTestId("location-display")).toHaveTextContent(
        "?orderId=12&customerName=Jao&status=all&page=1",
      );
    });
  });
});
