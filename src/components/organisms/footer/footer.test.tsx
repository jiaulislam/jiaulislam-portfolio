import Footer from "./footer";
import { render } from "@testing-library/react";

describe("Footer test", () => {
  test("Footer should have footer Text", () => {
    const label = "Footer";

    const { getByText } = render(<Footer />);
    expect(getByText(label)).toBeInTheDocument();
  });
});
