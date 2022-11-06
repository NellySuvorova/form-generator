import { FieldTypes } from 'interfaces'

export const defaultInputValue = {
  title: 'My custom form',
  items: [
    {
      label: 'count',
      type: FieldTypes.NUMBER,
    },
    {
      label: 'radio',
      type: FieldTypes.RADIO,
      options: ['One', 'Two'],
    },
  ],
  buttons: ['OK', 'Cancel', 'Apply'],
}
