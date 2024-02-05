// Import necessary dependencies for testing
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApartmentListPage } from "../pages/apartments-list/apartmentList";

// Mocking the useFetchApartments hook
jest.mock("../../api/apartment.api", () => ({
  useFetchApartments: jest.fn(() => ({
    data: { data: [] },
    isSuccess: true,
    isLoading: false,
  })),
}));

describe("ApartmentListPage", () => {
  it("renders the component", () => {
    render(<ApartmentListPage />);
    expect(
      screen.getByText(/Furnished Apartments for Rent/i)
    ).toBeInTheDocument();
  });

  it('displays "No Apartments Found" when no data is available', () => {
    render(<ApartmentListPage />);
    expect(screen.getByText(/No Apartments Found/i)).toBeInTheDocument();
  });

  it("opens the filter modal when the filter button is clicked", () => {
    render(<ApartmentListPage />);

    fireEvent.click(screen.getByTestId("filter-button"));

    expect(screen.getByTestId("filter-modal")).toBeInTheDocument();
  });
});
