import React from 'react'
import { Box, Textarea } from '@chakra-ui/react'

interface IProps {
  changeJsonInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  jsonInput: string
  prettifyOnBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Editor: React.FC<IProps> = ({ changeJsonInput, jsonInput, prettifyOnBlur }) => (
  <Box mt="10">
    <Textarea
      cols={50}
      rows={25}
      onChange={changeJsonInput}
      value={jsonInput}
      onBlur={prettifyOnBlur}
    />
  </Box>
)
