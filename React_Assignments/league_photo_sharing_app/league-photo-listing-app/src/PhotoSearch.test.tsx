import { render, screen } from "@testing-library/react";
import PhotoSearch from "./PhotoSearch";

test("renders photo search component", () => {
  render(<PhotoSearch />);
  const title = screen.getByText(/Search photos/i);
  expect(title).toBeInTheDocument();
});

test("renders search input", () => {
  render(<PhotoSearch />);
  const input = screen.getByPlaceholderText(/Search.../i);
  expect(input).toBeInTheDocument();
});
