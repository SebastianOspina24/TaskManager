import Login from "../pages/login";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders ", () => {
    render(<Login />);
  });
});
