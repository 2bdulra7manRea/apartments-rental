import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpGet, httpPost } from "./http";

export const useFetchApartments = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-apartments"],
    queryFn: () => httpGet("apartments/list"),
  });

  return { data, isSuccess, isLoading };
};

export const createApartmentMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isLoading, isSuccess, data } = useMutation({
    mutationFn: (apartment) => {
      return httpPost("apartment/new", apartment);
    },
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(["get-apartments"]);
    },
    onError(error, variables, context) {},
  });
  return { mutateAsync, isError, isLoading, isSuccess, data };
};
