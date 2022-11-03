import { parseJsonObject } from 'utils/parse-json-object'
import { FormConfig } from 'interfaces'

export const adaptEditorDataForForm = (input: string) => {
  const formConfig = parseJsonObject(input)

  if (!formConfig) {
    return null
  }

  const { title, buttons, items } = formConfig as FormConfig

  return { title, buttons, formFields: items }
}
