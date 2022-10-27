import { FieldTypes, FormConfig } from "../interfaces";

export const formAdapter = (jsonInput: string) => {
  const formConfig = JSON.parse(jsonInput);

  const { title, buttons, items } = formConfig as FormConfig;

  const formFields = items.reduce(
    (acc, cur) => {
      acc[cur.type].push(cur);
      return acc;
    },
    {
      [FieldTypes.CHECKBOX]: [],
      [FieldTypes.DATE]: [],
      [FieldTypes.NUMBER]: [],
      [FieldTypes.RADIO]: [],
      [FieldTypes.TEXT]: [],
      [FieldTypes.TEXTAREA]: [],
    }
  );

  return { title, buttons, formFields };
};
