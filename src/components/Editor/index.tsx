import { Box, Textarea } from '@chakra-ui/react'

interface IProps {
  changeJsonInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  jsonInput: string
  prettifyOnBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  isError: boolean
}

// todo add submit button or go to form control
export const Editor: React.FC<IProps> = ({
  changeJsonInput,
  jsonInput,
  prettifyOnBlur,
  isError,
}) => (
  <Box mt="10">
    <Textarea
      cols={50}
      rows={25}
      onChange={changeJsonInput}
      value={jsonInput}
      onBlur={prettifyOnBlur}
      isInvalid={isError}
    />
  </Box>
)
