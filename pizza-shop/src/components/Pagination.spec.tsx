import { render } from "@testing-library/react";
import { Pagination } from "./Pagination";
import userEvent from "@testing-library/user-event";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it("should display the right amount of and results", () => {
    const wrapper = render(
      <Pagination
        onPageChange={() => {}}
        pageIndex={0}
        parPage={10}
        totalCount={200}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("total de 200 itens")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={0}
        parPage={10}
        totalCount={200}
      />,
    );

    const user = userEvent.setup();

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("should be able to navigate to the previous page", async () => {
    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        parPage={10}
        totalCount={200}
      />,
    );

    const user = userEvent.setup();

    const nextPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it("should be able to navigate to the first page", async () => {
    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        parPage={10}
        totalCount={200}
      />,
    );

    const user = userEvent.setup();

    const nextPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("should be able to navigate to the last page", async () => {
    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        parPage={10}
        totalCount={200}
      />,
    );

    const user = userEvent.setup();

    const nextPageButton = wrapper.getByRole("button", {
      name: "Ultima página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
