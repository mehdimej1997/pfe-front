import { useMutation } from "@tanstack/react-query";
import { AUTH_MUTATIONS } from "../queryKeys";
import { setCookies } from "./actions";
import { login } from "./auth.service";

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: login,
    mutationKey: [AUTH_MUTATIONS.LOGIN],
    onSuccess: ({ data }) => setCookies(data),
  });

  return mutation;
};
