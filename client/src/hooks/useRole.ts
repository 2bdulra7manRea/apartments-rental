import { useEffect, useState } from "react";
import { getRole } from "../helpers/auth";

enum ROLE {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  REALTOR = "REALTOR",
}

export const useUserRole = () => {
  const [role, setRole] = useState<string>(ROLE.CLIENT);

  useEffect(() => {
    const role = getRole();
    if (role) {
      setRole(role);
    }
  }, []);

  const isAdmin = () => {
    return role === ROLE.ADMIN;
  };
  const isClient = () => {
    return role === ROLE.CLIENT;
  };
  const isRealtor = () => {
    return role === ROLE.REALTOR;
  };

  return { isAdmin, isClient, isRealtor };
};
