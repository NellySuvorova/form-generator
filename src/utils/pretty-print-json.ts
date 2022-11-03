export function prettyPrint(obj: any) {
  const formattedJson = JSON.stringify(obj, undefined, 4)

  return formattedJson
}
