import React from 'react'
import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { FormItem, FieldTypes } from '../../interfaces'
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter'

interface Props {
  item: FormItem
}

// завести конфиг для темы, чтобы менять верстку в зависимости от типа инпута
export const FormItemWrapper: React.FC<Props> = ({ children, item }) => {
  const noLabel = [FieldTypes.CHECKBOX].includes(item.type)

  return (
    <Stack justifyContent="start" mt="7">
      <FormControl>
        {!noLabel && (
          <FormLabel htmlFor={item.label} fontSize="large" fontWeight={600}>
            {capitalizeFirstLetter(item.label)}
          </FormLabel>
        )}
        {children}
      </FormControl>
    </Stack>
  )
}
