import { useQuery } from "react-query";
import { httpGet } from "./http";

export const useFetchUsers = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-users"],
    queryFn: () => httpGet("users/list"),
  });

  return { data, isSuccess, isLoading };
};
