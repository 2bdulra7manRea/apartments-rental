import { useNavigate } from "react-router-dom";
import { addAuthHeader } from "../api/http";
import { getToken, removeToken, storeToken } from "../helpers/auth";
import { useEffect, useState } from "react";

export const useUserAccount = () => {
  const navigate = useNavigate();

  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuthenticatedUser(true);
    } else {
      setIsAuthenticatedUser(false);
    }
  }, []);

  const handleOnLogin = (authResponse: any) => {
    const { access_token, username, role } = authResponse;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("role", role);
    if (access_token) {
      addAuthHeader(access_token);
      storeToken(access_token);
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
