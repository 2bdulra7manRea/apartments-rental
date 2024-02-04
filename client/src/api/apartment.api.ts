import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpDelete, httpGet, httpPost } from "./http";

export const useFetchApartments = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-apartments"],
    queryFn: () => httpGet("apartment/list"),
  });

  return { data, isSuccess, isLoading };
};

export const useCreateApartmentMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?:
    | ((data: any, variables: any, context: unknown) => void | Promise<unknown>)
    | undefined;
  onError?:
    | ((
        error: any,
        variables: any,
        context: unknown
      ) => void | Promise<unknown>)
    | undefined;
}) => {
  const { mutate, isError, isLoading, isSuccess, data } = useMutation<
    any,
    any,
    any
  >({
    mutationFn: (apartment: any) => {
      return httpPost("apartment/new", apartment);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};

export const useDeleteApartmentMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?:
    | ((data: any, variables: any, context: unknown) => void | Promise<unknown>)
    | undefined;
  onError?:
    | ((
        error: any,
        variables: any,
        context: unknown
      ) => void | Promise<unknown>)
    | undefined;
}) => {
  const { mutate, isError, isLoading, isSuccess, data } = useMutation<
    any,
    any,
    any
  >({
    mutationFn: (id: string) => {
      return httpDelete(`apartments/${id}`);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};
