export type FetchResponse<T = undefined> = Promise<
  FetchError | FetchSuccess<T>
>;

export type FetchSuccess<T = undefined> = T extends undefined
  ? {
      success: true;
      data?: undefined;
    }
  : {
      success: true;
      data: T;
    };
export interface FetchError {
  success: false;
  errorMessage?: string;
}

export interface User {
  username: string;
  password: string;
}

export interface PeopleResponse {
  count: number;
  results: Person[];
  next: string | null;
  previous: string | null;
}

interface Person {
  name: string;
  mass: number;
  height: number;
  hair_color: string;
  skin_color: string;
}

export interface Cache<T> {
  data: T;
  timestamp: number;
}
