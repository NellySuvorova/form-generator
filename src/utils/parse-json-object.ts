export function parseJsonObject(jsonString: string) {
  try {
    const obj = JSON.parse(jsonString)

    if (obj && typeof obj === 'object') {
      return obj
    }
  } catch (e) {}

  return false
}
