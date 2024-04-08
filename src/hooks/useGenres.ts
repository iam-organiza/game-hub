import useData from "./useData";

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

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
