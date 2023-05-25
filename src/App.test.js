import { render, screen } from "@testing-library/react";

import App from "./App";
test("first test", () => {
  render(<App />);
  const el = screen.getAllByText("Hello world!");
  expect(el).not.toBeNaN();
});
