import { parseJsonObject } from 'utils/parse-json-object'
import { findTips } from 'utils/find-tips'
import { FormConfig } from 'interfaces'

export const useAdapter = (input: string) => {
  const adaptEditorDataForForm = () => {
    const formConfig = parseJsonObject(input)

    if (!formConfig) {
      return null
    }

    const { title, buttons, items } = formConfig as FormConfig

    return { title, buttons, formFields: items }
  }

  const formData = adaptEditorDataForForm()

  if (!formData) {
    return null
  }

  return { formData, tips: findTips(formData.formFields) }
}
