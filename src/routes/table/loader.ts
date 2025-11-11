import { isAuthenticated } from "@/services/login";
import { getPeople } from "@/services/people";
import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";

export const tableLoader = async ({ request }: LoaderFunctionArgs) => {
  if (!isAuthenticated()) return redirect("/");
  const page = new URL(request.url).searchParams.get("page") ?? "1";
  return await getPeople(page);
};
