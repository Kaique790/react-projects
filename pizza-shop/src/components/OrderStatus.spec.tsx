import { render } from "@testing-library/react";
import { OrderStatus } from "./OrderStatus";

describe("Order Status", () => {
  it("should display the right text based when order status is penidng", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });
  it("should display the right text based when order status is canceled", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-400");
  });
  it("should display the right text based when order status is delivering", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-400");
  });
  it("should display the right text based when order status is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-400");
  });
  it("should display the right text based when order status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });
  it("should display the right text based when order status is processing", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    wrapper.debug();

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-400");
  });
});
