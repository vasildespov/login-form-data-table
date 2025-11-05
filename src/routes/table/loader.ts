import { isAuthenticated } from "@/services/login";
import { getPeople } from "@/services/people";
import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";

export const tableLoader = async ({ request }: LoaderFunctionArgs) => {
  const page = new URL(request.url).searchParams.get("page") ?? "1";
  if (!isAuthenticated()) return redirect("/");
  const people = await getPeople(page);
  return people;
};
