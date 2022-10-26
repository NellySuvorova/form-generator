export function prettyPrint(value: string) {
  const obj = JSON.parse(value);
  const pretty = JSON.stringify(obj, undefined, 4);

  return pretty;
}
