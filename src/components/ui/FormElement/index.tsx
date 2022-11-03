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

const defaultBorderColor = 'rgb(51, 51, 51)'

export const FormElement = ({ field }: { field: FormField }) => {
  const { type, label, options } = field

  const defaultProps = {
    id: label,
    colorScheme: 'gray',
    borderColor: defaultBorderColor,
  }

  switch (type) {
    case FieldTypes.CHECKBOX:
      return (
        <Checkbox {...defaultProps} size="lg">
          {capitalizeFirstLetter(label)}
        </Checkbox>
      )
    case FieldTypes.TEXT:
      return <Input {...defaultProps} type="date" />
    case FieldTypes.NUMBER:
      return (
        <NumberInput {...defaultProps} focusBorderColor={defaultBorderColor}>
          <NumberInputField />
          <NumberInputStepper borderColor={defaultBorderColor}>
            <NumberIncrementStepper />
            <NumberDecrementStepper borderColor={defaultBorderColor} />
          </NumberInputStepper>
        </NumberInput>
      )
    case FieldTypes.DATE:
      return <Input {...defaultProps} type="date" />
    case FieldTypes.RADIO:
      return (
        <RadioGroup {...defaultProps}>
          <Stack spacing={2} direction="column">
            {options?.map((radio: string) => (
              <Radio value={radio} key={radio} borderColor={defaultBorderColor}>
                {radio}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )
    case FieldTypes.TEXTAREA:
      return <Textarea {...defaultProps} />
    default:
      return <Input {...defaultProps} />
  }
}
