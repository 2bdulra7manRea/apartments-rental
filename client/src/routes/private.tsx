import { Navigate } from "react-router-dom";
import { useUserAccount } from "../hooks/useAccount";

export const PrivateRouter = ({ children }: { children?: any }) => {
  const { isAuthenticated } = useUserAccount();

  if (isAuthenticated()) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"}></Navigate>;
};
