import Card from "./card";
import { render } from "@testing-library/react";

describe("Card test", () => {
  test("Card is visible", () => {
    const { getByText } = render(<Card />);

    expect(getByText(/test card/i)).toBeInTheDocument();
  });
});
