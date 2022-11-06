export function parseJson(jsonString: string) {
  try {
    const objFromJson = JSON.parse(jsonString)

    if (objFromJson && typeof objFromJson === 'object') {
      return objFromJson
    }
  } catch (e) {}

  return false
}
