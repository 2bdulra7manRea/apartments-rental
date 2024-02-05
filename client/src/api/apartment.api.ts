import { useMutation, useQuery } from "react-query";
import { httpDelete, httpGet, httpPatch, httpPost } from "./http";
import { FilterApartmentQuery } from "../common/types";

export const useFetchApartments = (filter?: FilterApartmentQuery) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-apartments"],
    queryFn: () => httpGet("apartment/list", { params: filter }),
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

export const useUpdateStatusApartmentMutation = ({
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
    mutationFn: ({ status, id }: { status: boolean; id: string }) => {
      return httpPatch(`apartment/status/${id}`, { status });
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};

export const useUpdateApartmentMutation = ({
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
      return httpPatch(`apartment/${apartment.id}`, apartment);
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
      return httpDelete(`apartment/${id}`);
    },
    onSuccess,
    onError,
  });
  return { mutate, isError, isLoading, isSuccess, data };
};
