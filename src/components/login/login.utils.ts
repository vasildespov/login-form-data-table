export const MIN_LENGTH = 4;
export const MAX_LENGTH = 30;
export const FIELD_DESCRIPTION = "Field must be between 4 and 30 characters.";
export const isFieldValid = (field: string) => {
  return field.length >= MIN_LENGTH && field.length <= MAX_LENGTH;
};
export interface FormFieldInput {
  value: string;
  onChange: (value: string) => void;
}
