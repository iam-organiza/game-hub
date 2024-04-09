import React, { useEffect, useState } from "react";
import apiCilent, { CanceledError } from "../services/api-cilent";
import { AxiosRequestConfig } from "axios";

export interface GetDataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

function isValidJsonString(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export default function useData<T>(url: string, jsonRequestConfig?: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let requestConfig = {} as AxiosRequestConfig;
    if (jsonRequestConfig && isValidJsonString(jsonRequestConfig)) {
      requestConfig = JSON.parse(jsonRequestConfig);
    }

    setLoading(true);
    apiCilent
      .get<GetDataResponse<T>>(url, {
        signal: controller.signal,
        ...requestConfig,
      })
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
  }, [url, jsonRequestConfig]);

  return {
    data,
    error,
    loading,
  };
}
