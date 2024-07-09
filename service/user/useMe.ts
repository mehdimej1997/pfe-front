import { useQuery } from "@tanstack/react-query";
import { me } from "./user.service";
import { USER_QUERY_KEY } from "../queryKeys";

export const useMe = () => {
  const query = useQuery({
    queryFn: () => me(),
    queryKey: [USER_QUERY_KEY.ME],
    select: ({ data }) => data,
  });

  return query;
};
