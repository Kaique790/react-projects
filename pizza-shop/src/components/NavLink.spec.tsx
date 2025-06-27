import { render } from "@testing-library/react";
import { NavLink } from "./NavLink";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the nav link when is the currenty page", () => {
    const wrapper = render(
      <>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/home"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    wrapper.debug();
    expect(wrapper.getByText("home").dataset.current).toEqual("true");
    expect(wrapper.getByText("about").dataset.current).toEqual("false");
  });
});
