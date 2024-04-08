import React, { useEffect, useState } from "react";
import apiCilent, { CanceledError } from "../services/api-cilent";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GetGenreResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

export default function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiCilent
      .get<GetGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenres(res.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return {
    genres,
    error,
    loading,
  };
}
