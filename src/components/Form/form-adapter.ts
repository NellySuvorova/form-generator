import { parseJson } from 'utils/parse-json'
import { FormConfig } from 'interfaces'

export const adaptEditorDataForForm = (input: string) => {
  const formConfig = parseJson(input)

  if (!formConfig) {
    return null
  }

  const { title, buttons, items } = formConfig as FormConfig

  return { title, buttons, formFields: items }
}
