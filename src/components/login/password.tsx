import {
  FIELD_DESCRIPTION,
  type FormFieldInput,
  MAX_LENGTH,
  MIN_LENGTH,
} from "@/components/login/login.utils";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon, Lock } from "lucide-react";
import { useState } from "react";

export const Password = ({ value, onChange }: FormFieldInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <InputGroup>
        <InputGroupInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
          required
          name="password"
          id="password"
          type={showPassword ? "text" : "password"}
        />
        <InputGroupAddon>
          <Lock />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            className="size-fit hover:bg-transparent"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>{FIELD_DESCRIPTION}</FieldDescription>
    </Field>
  );
};
