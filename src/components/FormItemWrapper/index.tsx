import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { FormItem } from '../../interfaces'

interface Props {
  item: FormItem
}

// завести конфиг для темы, чтобы менять верстку в зависимости от типа инпута
export const FormItemWrapper: React.FC<Props> = ({ children, item }) => (
  <FormControl>
    <FormLabel htmlFor={item.label}>{item.label}</FormLabel>
    {children}
  </FormControl>
)
