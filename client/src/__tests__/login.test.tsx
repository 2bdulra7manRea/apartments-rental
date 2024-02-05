import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/auth/login";
jest.mock("../../hooks/useAccount", () => ({
  useUserAccount: jest.fn(() => ({ handleOnLogin: jest.fn() })),
}));

jest.mock("../../components/notification/notification", () => ({
  useNotificationApp: jest.fn(() => ({
    contextHolder: null,
    openNotification: jest.fn(),
  })),
}));

jest.mock("../../api/auth.api", () => ({
  useLoginAccountMutation: jest.fn(() => ({ mutate: jest.fn() })),
}));

describe("LoginPage", () => {
  it("renders the component", () => {
    render(<Login />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(<Login />);

    // Fill in the form fields with valid data
    fireEvent.change(screen.getByPlaceholderText("E-email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Sign Up/i));

    // Wait for the asynchronous operations to complete
    await waitFor(() => {});
    expect(screen.getByText(/Successfully logged in/i)).toBeInTheDocument();
  });

  it("displays error messages for invalid form data", async () => {
    render(<Login />);
    fireEvent.click(screen.getByText(/Sign Up/i));
    await waitFor(() => {});
    expect(screen.getByText(/The Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/The Password is required/i)).toBeInTheDocument();
  });
});
