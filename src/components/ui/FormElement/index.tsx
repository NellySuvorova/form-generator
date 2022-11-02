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

// вынести строки в константы
export const FormElement = ({ field }: { field: FormField }) => {
  const { type, label, options } = field

  switch (type) {
    case FieldTypes.CHECKBOX:
      return (
        <Checkbox id={label} size="lg" colorScheme="gray" borderColor="rgb(51, 51, 51)">
          {capitalizeFirstLetter(label)}
        </Checkbox>
      )
    case FieldTypes.TEXT:
      return <Input id={label} colorScheme="gray" borderColor="rgb(51, 51, 51)" />
    case FieldTypes.NUMBER:
      return (
        <NumberInput
          id={label}
          colorScheme="gray"
          borderColor="rgb(51, 51, 51)"
          focusBorderColor="rgb(51, 51, 51)"
        >
          <NumberInputField />
          <NumberInputStepper borderColor="rgb(51, 51, 51)">
            <NumberIncrementStepper />
            <NumberDecrementStepper borderColor="rgb(51, 51, 51)" />
          </NumberInputStepper>
        </NumberInput>
      )
    case FieldTypes.DATE:
      return <input type="date" id={label} />
    case FieldTypes.RADIO:
      return (
        <RadioGroup colorScheme="gray" borderColor="rgb(51, 51, 51)">
          <Stack spacing={2} direction="column">
            {options?.map((radio: string) => (
              <Radio value={radio} key={radio} borderColor="rgb(51, 51, 51)">
                {radio}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )
    case FieldTypes.TEXTAREA:
      return <Textarea id={label} colorScheme="gray" borderColor="rgb(51, 51, 51)" />
    default:
      return <Input id={label} colorScheme="gray" borderColor="rgb(51, 51, 51)" />
  }
}
