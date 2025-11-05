import { isFieldValid } from "@/components/login/login.utils";
import { Password } from "@/components/login/password";
import { Username } from "@/components/login/username";
import { Button } from "@/components/ui/button";
import { FieldSet, FieldGroup, FieldError } from "@/components/ui/field";
import type { homeAction } from "@/routes/home/action";
import type { User } from "@/types";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useFetcher } from "react-router";

export const Login = () => {
  const fetcher = useFetcher<typeof homeAction>();
  const isSubmitting = fetcher.state === "submitting";
  const error = fetcher.data?.errorMessage;
  const [{ username, password }, setFormFields] = useState<User>({
    username: "",
    password: "",
  });
  const isValid = isFieldValid(username) && isFieldValid(password);

  return (
    <fetcher.Form
      action="/"
      method="post"
      className="flex w-full max-w-md flex-col gap-5 rounded-md p-5 shadow-xl"
    >
      <FieldSet disabled={isSubmitting}>
        <FieldGroup>
          <Username
            value={username}
            onChange={(value) => setFormFields({ password, username: value })}
          />
          <Password
            value={password}
            onChange={(value) => setFormFields({ username, password: value })}
          />
        </FieldGroup>
      </FieldSet>
      <Button type="submit" disabled={isSubmitting || !isValid}>
        {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Login"}
      </Button>
      {error && <FieldError>{error}</FieldError>}
    </fetcher.Form>
  );
};
