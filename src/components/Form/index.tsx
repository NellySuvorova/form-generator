import { Box, Stack, Button, Text, Center } from '@chakra-ui/react'

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
    <Center flexDirection="column">
      {title && (
        <Text fontSize="3xl" fontWeight={600} align="center" mb="10">
          {title}
        </Text>
      )}
      <form
        onSubmit={onSubmit}
        style={{
          width: '400px',
          backgroundColor: 'rgb(51,51,51,0.3)',
          padding: '40px',
          borderRadius: '10px',
          paddingTop: 0,
        }}
      >
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
            <Button colorScheme="orange" key={button}>
              {button}
            </Button>
          ))}
        </Stack>
      </form>
    </Center>
  )
}
