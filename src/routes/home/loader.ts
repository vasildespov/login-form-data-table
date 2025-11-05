import { isAuthenticated } from "@/services/login";
import { redirect } from "react-router";

export const homeLoader = async () => {
  return isAuthenticated() ? redirect("/table") : null;
};
