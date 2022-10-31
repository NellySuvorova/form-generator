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
  Box,
  RadioGroup,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react'

import { formAdapter } from '../../utils/form-adapter'
import { FormItem, FieldTypes } from '../../interfaces'

import { FormItemWrapper } from '../FormItemWrapper'

interface IProps {
  jsonInput: string
}

const renderFormElement = (item: FormItem) => {
  switch (item.type) {
    case FieldTypes.CHECKBOX:
      return (
        <Checkbox id={item.label} size="lg">
          {item.label}
        </Checkbox>
      )
    case FieldTypes.TEXT:
      return <Input id={item.label} />
    case FieldTypes.NUMBER:
      return (
        <NumberInput id={item.label}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )
    case FieldTypes.DATE:
      return <input type="date" id={item.label} />
    case FieldTypes.RADIO:
      return (
        <RadioGroup>
          <Stack spacing={4} direction="row">
            {item.options?.map((radio: string) => (
              <Radio value={radio} key={radio}>
                {radio}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )
    case FieldTypes.TEXTAREA:
      return <Textarea id={item.label} />
    default:
      return <Input id={item.label} />
  }
}

// не забыть плейсхолдеры?
// у формы должен быть бэкграунд, не включающий тайтл и паддинг
export const Form: React.FC<IProps> = ({ jsonInput }) => {
  const { title, buttons, formFields } = formAdapter(jsonInput)

  return (
    <Box mt="10">
      {title && (
        <Text fontSize="xl" align="center" style={{ fontWeight: 600 }}>
          {title}
        </Text>
      )}
      <form>
        {formFields.map((item: FormItem) => (
          <FormItemWrapper item={item}>{renderFormElement(item)}</FormItemWrapper>
        ))}
        <Stack direction="row" mt="10" justifyContent="space-between">
          {buttons.map((button: string) => (
            <Button colorScheme="orange" key={button}>
              {button}
            </Button>
          ))}
        </Stack>
      </form>
    </Box>
  )
}
