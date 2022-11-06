import { FormConfig } from 'interfaces'

export function prettyPrint(obj: FormConfig) {
  const formattedJson = JSON.stringify(obj, undefined, 4)

  return formattedJson
}
