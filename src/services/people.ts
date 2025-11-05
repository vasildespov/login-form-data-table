import { fetchAndCache } from "@/services/cache";
import type { FetchResponse, PeopleResponse } from "@/types";

const URL = "https://swapi.py4e.com/api/people/";
export const getPeople = async (
  page: string = "1",
): FetchResponse<PeopleResponse> => {
  const endpoint = `${URL}?page=${page}`;
  return fetchAndCache(endpoint);
};
