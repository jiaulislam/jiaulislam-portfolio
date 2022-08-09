import Header from "./header";
import { render } from "@testing-library/react";

describe("Header test", () => {
  test("Should have text header", () => {
    const expectText = "Header";

    const { getByText } = render(<Header />);
    expect(getByText(expectText)).toBeInTheDocument();
  });
});
