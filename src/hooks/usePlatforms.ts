import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface GetPlatformsResponse {
  count: number;
  next: string;
  previous: string;
  results: Platform[];
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
