import { createBrowserRouter, Navigate } from "react-router-dom";
import { ApartmentDetailsPage } from "../pages/apartment-details/apartmentDetails";
import { ApartmentListPage } from "../pages/apartments-list/apartmentList";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import { Home } from "../pages/home/Home";
import { UsersListPage } from "../pages/users-list/usersList";
import { PrivateRouter } from "./private";
import { PublicRouter } from "./public";

export const appRoutes = createBrowserRouter([
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
        element: (
          <PrivateRouter>
            <ApartmentListPage />
          </PrivateRouter>
        ),
      },
      {
        path: "apartments/:id/details",
        element: (
          <PrivateRouter>
            {" "}
            <ApartmentDetailsPage />
          </PrivateRouter>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRouter>
            <UsersListPage />
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRouter>
            <RegisterPage />
          </PublicRouter>
        ),
      },
    ],
  },
]);
