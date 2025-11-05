import { type FetchResponse, type FetchSuccess, type Cache } from "@/types";

/** 1 min */
const CACHE_TIME = 1 * 60 * 1000;

export const fetchData = async <T>(endpoint: string): FetchResponse<T> => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail);
    }

    const cached = {
      data: { success: true, data },
      timestamp: Date.now(),
    } as Cache<FetchSuccess<T>>;

    localStorage.setItem(endpoint, JSON.stringify(cached));
    return cached.data;
  } catch (e) {
    const error = e as Error;
    return { success: false, errorMessage: error.message };
  }
};

export const fetchAndCache = async <T>(endpoint: string): FetchResponse<T> => {
  try {
    const cached = localStorage.getItem(endpoint);

    if (cached) {
      const { data, timestamp } = JSON.parse(cached) as Cache<FetchSuccess<T>>;
      const age = Date.now() - timestamp;

      if (age < CACHE_TIME) {
        return data;
      }

      clearCache(endpoint);
    }

    return await fetchData<T>(endpoint);
  } catch (e) {
    const error = e as Error;
    return { success: false, errorMessage: error.message };
  }
};

export const clearCache = (key: string): void => {
  localStorage.removeItem(key);
};
