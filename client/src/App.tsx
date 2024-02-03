import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ApartmentListPage } from "./pages/apartments-list/apartmentList";
import { ApartmentDetailsPage } from "./pages/apartment-details/apartmentDetails";
import { UsersListPage } from "./pages/users-list/usersList";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import { Home } from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/apartments"} />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "apartments",
        element: <ApartmentListPage />,
      },
      {
        path: "apartments/:id/details",
        element: <ApartmentDetailsPage />,
      },
      {
        path: "users",
        element: <UsersListPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
