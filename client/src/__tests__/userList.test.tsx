import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UsersListPage } from "../pages/users-list/usersList";

jest.mock("../../api/users.api", () => ({
  useFetchUsers: jest.fn(() => ({
    data: { data: [] },
    isLoading: false,
    isSuccess: true,
  })),
}));

describe("UsersListPage", () => {
  it("renders the component", () => {
    render(<UsersListPage />);
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
  });

  it("displays the list of users", () => {
    render(<UsersListPage />);
    expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
  });

  it('opens the create user modal when the "Add new user" button is clicked', () => {
    render(<UsersListPage />);
    fireEvent.click(screen.getByText(/Add new user/i));
    expect(screen.getByText(/Create User/i)).toBeInTheDocument();
  });

  it("opens the delete user modal when the delete button is clicked", async () => {
    render(<UsersListPage />);
    fireEvent.click(screen.getByText(/Delete User/i));
    await waitFor(() => {});
    expect(screen.getByText(/Delete User/i)).toBeInTheDocument();
  });
});
