import React, { useEffect, useState } from "react";
import apiCilent, { CanceledError } from "../services/api-cilent";

export interface GetDataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export default function useData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiCilent
      .get<GetDataResponse<T>>(url, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
