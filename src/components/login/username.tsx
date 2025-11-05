import {
  FIELD_DESCRIPTION,
  MAX_LENGTH,
  MIN_LENGTH,
  type FormFieldInput,
} from "@/components/login/login.utils";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { User } from "lucide-react";

export const Username = ({ value, onChange }: FormFieldInput) => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <InputGroup>
        <InputGroupInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
          required
          name="username"
          id="username"
          type="text"
        />
        <InputGroupAddon>
          <User />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>{FIELD_DESCRIPTION}</FieldDescription>
    </Field>
  );
};
