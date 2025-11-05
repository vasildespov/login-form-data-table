import { login } from "@/services/login";
import type { User } from "@/types";
import { redirect, type ActionFunctionArgs } from "react-router";

export const homeAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  } as User;
  const auth = await login(user);
  return auth.success ? redirect("/table") : auth;
};
