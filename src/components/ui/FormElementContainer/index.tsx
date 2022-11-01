import React from 'react'
import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { FormField, FieldTypes } from '../../../interfaces'
import { capitalizeFirstLetter } from '../../../utils/capitalize-first-letter'

interface Props {
  field: FormField
}

export const FormElementContainer: React.FC<Props> = ({ children, field }) => {
  const { type, label } = field

  const noLabel = [FieldTypes.CHECKBOX].includes(type)

  return (
    <Stack justifyContent="start" mt="7">
      <FormControl>
        {!noLabel && (
          <FormLabel htmlFor={label} fontSize="large" fontWeight={600}>
            {capitalizeFirstLetter(label)}
          </FormLabel>
        )}
        {children}
      </FormControl>
    </Stack>
  )
}
