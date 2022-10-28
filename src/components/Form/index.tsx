import { formAdapter } from '../../utils/form-adapter'
import { FormItem, FieldTypes } from '../../interfaces'
import {
  Checkbox,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  Textarea,
} from '@chakra-ui/react'
import { FormItemWrapper } from '../FormItemWrapper'

interface IProps {
  jsonInput: string
}

const renderFormElement = (item: FormItem) => {
  switch (item.type) {
    case FieldTypes.CHECKBOX:
      return <Checkbox id={item.label} />
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
      return <Radio id={item.label} />
    case FieldTypes.TEXTAREA:
      return <Textarea id={item.label} />
  }
}

// не забыть плейсхолдеры?
export const Form: React.FC<IProps> = ({ jsonInput }) => {
  const { title, buttons, formFields } = formAdapter(jsonInput)

  return (
    <form>
      {formFields.map((item: FormItem) => {
        return <FormItemWrapper item={item}>{renderFormElement(item)}</FormItemWrapper>
      })}
    </form>
  )
}
