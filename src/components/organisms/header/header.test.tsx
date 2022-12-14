import Header from "./header";
import { render } from "@testing-library/react";

describe("Header test", () => {
  test("Should have correct title", () => {
    const titleText = "jDev";

    const { getByText } = render(<Header />);

    expect(getByText(titleText)).toBeInTheDocument();
  });

  test("Should have 3 lisitem", () => {
    const countOfListItems = 3;
    const { getAllByRole } = render(<Header />);

    expect(getAllByRole("listitem")).toHaveLength(countOfListItems);
  });
});
