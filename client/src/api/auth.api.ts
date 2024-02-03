import { useMutation } from "react-query";
import { httpPost } from "./http";

export const useRegisterAccountMutation = ({
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
    mutationFn: (userData: any) => {
      return httpPost("auth/register", userData);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};

export const useLoginAccountMutation = ({
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
    mutationFn: (userData: any) => {
      return httpPost("auth/login", userData);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};
