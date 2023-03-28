import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/app/api/current",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;

//can reuse this - won't re-fetch everytime, will check to see if data already exists and if data needs to be revalidated... replaces global state like redux (swr library)
