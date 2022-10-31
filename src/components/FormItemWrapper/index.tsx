import React from 'react'
import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { FormItem, FieldTypes } from '../../interfaces'

interface Props {
  item: FormItem
}

// завести конфиг для темы, чтобы менять верстку в зависимости от типа инпута
export const FormItemWrapper: React.FC<Props> = ({ children, item }) => {
  const noLabel = [FieldTypes.CHECKBOX].includes(item.type)

  return (
    <Stack justifyContent="start" mt="5">
      <FormControl>
        {!noLabel && <FormLabel htmlFor={item.label}>{item.label}</FormLabel>}
        {children}
      </FormControl>
    </Stack>
  )
}
