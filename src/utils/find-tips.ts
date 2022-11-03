import { FormField, FieldTypes } from 'interfaces'

export const findTips = (items: FormField[]) => {
  const tipsForEmptyLabels = items
    .filter((item: FormField) => !item.label)
    .map((item: FormField) => `Label is missing for a field with type "${item.type}"`)

  const tipsForEmptyRadio = items
    .filter((item: FormField) => item.type === FieldTypes.RADIO && !item.options)
    .map(() => `One of radio inputs is missing options`)

  return [...tipsForEmptyLabels, ...tipsForEmptyRadio]
}
