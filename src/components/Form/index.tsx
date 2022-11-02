import { Stack, Button, Text } from '@chakra-ui/react'

import { FormElementContainer } from 'components/ui/FormElementContainer'
import { FormElement } from 'components/ui/FormElement'

import { formAdapter } from 'utils/form-adapter'
import { FormField } from 'interfaces'

interface IProps {
  jsonInput: string
}

// не забыть плейсхолдеры?
// у формы должен быть бэкграунд, не включающий тайтл и паддинг
export const Form: React.FC<IProps> = ({ jsonInput }) => {
  const { title, buttons, formFields } = formAdapter(jsonInput)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: '400px',
        padding: '40px',
        borderRadius: '8px',
        margin: 'auto',
        marginTop: '100px',
        boxShadow: '0 8px 48px -8px rgb(0 0 0 / 15%)',
      }}
    >
      {title && (
        <Text fontSize="3xl" fontWeight={600} align="center" mb="10">
          {title}
        </Text>
      )}
      {formFields.map((field: FormField) => (
        <FormElementContainer field={field}>
          <FormElement field={field} />
        </FormElementContainer>
      ))}
      <Stack
        direction="row"
        mt="10"
        justifyContent={buttons.length === 1 ? 'center' : 'space-between'}
      >
        {buttons.map((button: string) => (
          <Button colorScheme="blackAlpha" key={button}>
            {button}
          </Button>
        ))}
      </Stack>
    </form>
  )
}
