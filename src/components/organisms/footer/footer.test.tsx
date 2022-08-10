import Footer from "./footer";
import { render } from "@testing-library/react";

describe("Footer test", () => {
  test("Footer should have jDev Text", () => {
    const { getByText } = render(<Footer />);

    expect(getByText(/jDev/i)).toHaveTextContent("Copyright");
  });

  test("Footer should have current year", () => {
    const currentYear = new Date().getFullYear().toString();
    const { getByText } = render(<Footer />);

    expect(getByText(/copyright/i)).toHaveTextContent(currentYear);
  });
});
