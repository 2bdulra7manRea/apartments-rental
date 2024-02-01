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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/apartments"} />,
  },
  {
    path: "/apartments",
    element: <ApartmentListPage />,
  },
  {
    path: "/apartments/:id/details",
    element: <ApartmentDetailsPage />,
  },
  {
    path: "/users",
    element: <UsersListPage />,
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