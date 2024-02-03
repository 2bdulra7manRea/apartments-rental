import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRoutes} />;
    </QueryClientProvider>
  );
}

export default App;
