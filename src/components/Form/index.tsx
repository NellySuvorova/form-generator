import { Stack, Button, Text, Center } from '@chakra-ui/react'

import { FormElementContainer } from 'components/ui/FormElementContainer'
import { FormElement } from 'components/ui/FormElement'

import { FormField } from 'interfaces'
import { BASE_SHADOW } from 'shared/constants'

interface IProps {
  formData?: { title: string; buttons: string[]; formFields: FormField[] }
}

export const Form: React.FC<IProps> = ({ formData }) => {
  if (!formData) {
    return <Center>Please finish filling json</Center>
  }

  const { title, buttons, formFields } = formData

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
        boxShadow: BASE_SHADOW,
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
