export function prettyPrint(value: string) {
  const obj = JSON.parse(value)
  const formattedJson = JSON.stringify(obj, undefined, 4)

  return formattedJson
}
