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

export type FormItem = { label: string; type: FieldTypes };
export interface FormConfig {
  buttons: string[];
  title: string;
  items: FormItem[];
}
