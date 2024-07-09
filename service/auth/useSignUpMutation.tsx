import { useMutation } from "@tanstack/react-query";
import { AUTH_MUTATIONS } from "../queryKeys";
import { signUp } from "./auth.service";

export const useSignUpMutation = () => {
  const mutation = useMutation({
    mutationFn: signUp,
    mutationKey: [AUTH_MUTATIONS.SIGN_UP],
  });

  return mutation;
};
