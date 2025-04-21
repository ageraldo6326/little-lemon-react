import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import BookingForm from "../components/BookingForm";
import BookingPage from "../components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
