export enum TabTypes {
  EDITOR = "Editor",
  FORM = "Form",
}

export enum FieldTypes {
  NUMBER = "number",
  TEXT = "text",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  DATE = "date",
  RADIO = "radio",
}

export interface FormConfig {
  buttons: string[];
  title: string;
  items: { label: string; type: FieldTypes }[];
}
