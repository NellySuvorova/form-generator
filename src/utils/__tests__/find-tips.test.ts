import { FieldTypes } from 'interfaces'
import { findTips } from '../find-tips'

describe('capitalizeFirstLetter', () => {
  it('create tips if some of the fields are missing label', () => {
    const items = [
      { label: 'checkbox', type: FieldTypes.CHECKBOX },
      { label: '', type: FieldTypes.TEXT },
    ]

    const result = findTips(items)

    expect(result).toHaveLength(1)
    expect(result[0]).toBe('Label is missing for a field with type "text"')
  })

  it('do not create tips if all fields have labels', () => {
    const items = [{ label: 'checkbox', type: FieldTypes.CHECKBOX }]

    const result = findTips(items)

    expect(result).toHaveLength(0)
  })

  it('create tip if radio input does not have options', () => {
    const items = [{ label: 'radio', type: FieldTypes.RADIO }]

    const result = findTips(items)

    expect(result).toHaveLength(1)
    expect(result[0]).toBe('One of radio inputs is missing options')
  })

  it('do not create tip if radio input has options', () => {
    const items = [{ label: 'radio', type: FieldTypes.RADIO, options: ['one, two'] }]

    const result = findTips(items)

    expect(result).toHaveLength(0)
  })
})
