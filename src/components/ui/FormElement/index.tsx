import {
  Checkbox,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  Textarea,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'

import { capitalizeFirstLetter } from 'utils/capitalize-first-letter'
import { FormField, FieldTypes } from 'interfaces'

export const FormElement = ({ field }: { field: FormField }) => {
  const { type, label, options } = field

  switch (type) {
    case FieldTypes.CHECKBOX:
      return (
        <Checkbox id={label} size="lg">
          {capitalizeFirstLetter(label)}
        </Checkbox>
      )
    case FieldTypes.TEXT:
      return <Input id={label} />
    case FieldTypes.NUMBER:
      return (
        <NumberInput id={label}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )
    case FieldTypes.DATE:
      return <input type="date" id={label} />
    case FieldTypes.RADIO:
      return (
        <RadioGroup>
          <Stack spacing={2} direction="column">
            {options?.map((radio: string) => (
              <Radio value={radio} key={radio}>
                {radio}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )
    case FieldTypes.TEXTAREA:
      return <Textarea id={label} />
    default:
      return <Input id={label} />
  }
}
