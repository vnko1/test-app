import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import Button from "./Button";

test("first test", () => {
  render(<App />);
  const el = screen.getAllByText("Hello world!");
  expect(el).not.toBeNaN();
  const btn = screen.getByText("Click on me");
  expect(btn).not.toBeUndefined();
});

test("second test", async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
