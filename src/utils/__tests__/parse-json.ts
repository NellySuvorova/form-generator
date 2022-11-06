import { parseJson } from '../parse-json'

describe('parseJson', () => {
  it('convert string to object and return object', () => {
    const stringMock = '{}'

    const result = parseJson(stringMock)

    expect(result).toStrictEqual({})
  })

  it('return false if string is not valid JSON string', () => {
    const stringMock = '{buttons: []}'

    const result = parseJson(stringMock)

    expect(result).toBe(false)
  })

  it('return false if string has undefined value', () => {
    const stringMock = 'undefined'

    const result = parseJson(stringMock)

    expect(result).toBe(false)
  })
})
