import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: object | null;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: object | null;
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
  platforms: {
    platform: Platform;
    released_at?: string;
    requirements?: {
      minimum: string;
      recommended: string;
    };
  }[];
}

export interface GetGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
