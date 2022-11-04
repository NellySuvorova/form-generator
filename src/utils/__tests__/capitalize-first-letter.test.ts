import { capitalizeFirstLetter } from '../capitalize-first-letter'

describe('capitalizeFirstLetter', () => {
  it('returns empty string if label is undefined', () => {
    const label = undefined

    const result = capitalizeFirstLetter(label)

    expect(result).toBe('')
  })

  it('returns string with capitalized first letter', () => {
    const label = 'test'

    const result = capitalizeFirstLetter(label)

    expect(result).toBe('Test')
  })

  it('return the same string if string starts with a symbol other that a letter', () => {
    const label = '$est'

    const result = capitalizeFirstLetter(label)

    expect(result).toBe('$est')
  })
})
