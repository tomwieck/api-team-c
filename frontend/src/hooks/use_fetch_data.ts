import { useEffect, useState } from "react";
// import { isError } from "../utils/type_guards";

export function isError(e: unknown): e is Error {
  return (e as Error).message !== undefined;
}

export function useFetchData<TResponse>(url: string) {
  const [data, setData] = useState<TResponse>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          console.log("json", json);
          setData(json);
        }
        setStatus(response.status);
      } catch (e: unknown) {
        setIsFetching(false);
        if (isError(e)) {
          setError(e.message);
        }
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching, error, status };
}
