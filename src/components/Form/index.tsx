import { Stack, Button, Text, Center, Heading, Link } from '@chakra-ui/react'

import { FormElementContainer } from 'components/ui/FormElementContainer'
import { FormElement } from 'components/ui/FormElement'

import { FormField } from 'interfaces'
import { BASE_SHADOW } from 'shared/constants'

interface IProps {
  formData?: { title: string; buttons: string[]; formFields: FormField[] }
}

const wrapperStyle = {
  width: '400px',
  padding: '40px',
  borderRadius: '8px',
  margin: 'auto',
  marginTop: '100px',
  boxShadow: BASE_SHADOW,
}

export const Form: React.FC<IProps> = ({ formData }) => {
  if (!formData) {
    return (
      <Center style={wrapperStyle}>
        <Heading>
          JSON contains errors! You may use{' '}
          <Link href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer" color="red">
            this tool
          </Link>{' '}
          to validate your input
        </Heading>
      </Center>
    )
  }

  const { title, buttons, formFields } = formData

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} style={wrapperStyle}>
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
