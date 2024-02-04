import { useMutation, useQuery } from "react-query";
import { httpDelete, httpGet, httpPost } from "./http";

export const useFetchUsers = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-users"],
    queryFn: () => httpGet("users/list"),
  });

  return { data, isSuccess, isLoading };
};

export const useDeleteUserMutation = ({
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
      return httpDelete(`users/${id}`);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};

export const useCreateUserMutation = ({
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
    mutationFn: (user: any) => {
      return httpPost("users/new", user);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};
