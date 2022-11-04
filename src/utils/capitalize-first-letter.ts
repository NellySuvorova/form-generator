export function capitalizeFirstLetter(label?: string) {
  if (!label) {
    return ''
  }
  return label.charAt(0).toUpperCase() + label.slice(1)
}
