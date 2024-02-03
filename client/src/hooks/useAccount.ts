import { useNavigate } from "react-router-dom";
import { addAuthHeader } from "../api/http";
import { getToken, removeToken, storeToken } from "../helpers/auth";

export const useUserAccount = () => {
  const navigate = useNavigate();

  const handleOnLogin = (token: string) => {
    if (token) {
      addAuthHeader(token);
      storeToken(token);
      navigate("/", { replace: true });
    }
  };

  const handleOnLogout = () => {
    removeToken();
    navigate("/login", { replace: true });
  };

  const isAuthenticated = (): boolean => {
    return !!getToken();
  };

  return { handleOnLogin, handleOnLogout, isAuthenticated };
};
