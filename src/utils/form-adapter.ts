import { FormConfig } from '../interfaces'

// check duplicated fields
export const formAdapter = (jsonInput: string) => {
  const formConfig = JSON.parse(jsonInput)

  const { title, buttons, items } = formConfig as FormConfig

  return { title, buttons, formFields: items }
}
