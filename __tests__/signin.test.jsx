import SignIn from "../pages/signin";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders ", () => {
    render(<SignIn />);
  });
});
