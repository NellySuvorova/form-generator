import React from 'react'

import { Box, Stack, Button, Text } from '@chakra-ui/react'

import { formAdapter } from '../../utils/form-adapter'
import { FormField } from '../../interfaces'

import { FormElementContainer } from '../ui/FormElementContainer'
import { FormElement } from '../ui/FormElement'

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
    <Box mt="10">
      {title && (
        <Text fontSize="2xl" fontWeight={600} align="center" mb="10">
          {title}
        </Text>
      )}
      <form onSubmit={onSubmit}>
        {formFields.map((field: FormField) => (
          <FormElementContainer field={field}>
            <FormElement field={field} />
          </FormElementContainer>
        ))}
        <Stack direction="row" mt="10" justifyContent="space-between">
          {buttons.map((button: string) => (
            <Button colorScheme="orange" key={button}>
              {button}
            </Button>
          ))}
          {false && <Button type="submit">Submit</Button>}
        </Stack>
      </form>
    </Box>
  )
}
