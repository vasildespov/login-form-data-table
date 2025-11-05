import { clearCache } from "@/services/cache";
import type { FetchResponse, User } from "@/types";

const URL = "https://dummyjson.com/user/login";
const ACCESS_TOKEN_KEY = "accessToken";
export const isAuthenticated = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return !!token;
};

export const login = async (user: User): FetchResponse => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const res = await response.json();

    if (!response.ok) {
      logout();
      throw new Error(res.message);
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, res.accessToken);
    return { success: true };
  } catch (e) {
    const error = e as Error;
    return { success: false, errorMessage: error.message };
  }
};

export const logout = () => {
  return clearCache(ACCESS_TOKEN_KEY);
};
