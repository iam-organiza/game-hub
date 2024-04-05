import React, { useEffect, useState } from "react";
import apiCilent, { CanceledError } from "../services/api-cilent";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating?: {
    id: number;
    slug:
      | "everyone"
      | "everyone-10-plus"
      | "teen"
      | "mature"
      | "adults-only"
      | "rating-pending";
    name:
      | "Everyone"
      | "Everyone 10+"
      | "Teen"
      | "Mature"
      | "Adults Only"
      | "Rating Pending";
  };
  platforms: [
    {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at?: string;
      requirements?: {
        minimum: string;
        recommended: string;
      };
    }
  ];
}

export interface GetGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");

  useEffect(() => {
    const controller = new AbortController();

    setLoading("processing");
    apiCilent
      .get<GetGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setLoading("success");
        setGames(res.data.results);
      })
      .catch((error) => {
        setLoading("failed");
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return {
    games,
    error,
    loading,
  };
}
