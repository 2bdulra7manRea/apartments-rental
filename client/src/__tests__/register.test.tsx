import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterPage from "../pages/auth/register";

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
  useRegisterAccountMutation: jest.fn(() => ({ mutate: jest.fn() })),
}));

describe("RegisterPage", () => {
  it("renders the component", () => {
    render(<RegisterPage />);
    expect(screen.getByText(/Create new account/i)).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText(/as Realtor/i));
    fireEvent.click(screen.getByText(/Sign In/i));
    await waitFor(() => {});
    expect(
      screen.getByText(/Successfully created a new account/i)
    ).toBeInTheDocument();
  });

  it("displays error messages for invalid form data", async () => {
    render(<RegisterPage />);
    fireEvent.click(screen.getByText(/Sign In/i));
    await waitFor(() => {});
    expect(screen.getByText(/The username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/The Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/The Password is required/i)).toBeInTheDocument();
  });
});
