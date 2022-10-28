import { FormConfig } from '../interfaces'

export const formAdapter = (jsonInput: string) => {
  const formConfig = JSON.parse(jsonInput)

  // судя по всему нужно поддержать тип кнопки - например submit
  const { title, buttons, items } = formConfig as FormConfig

  return { title, buttons, formFields: items }
}
