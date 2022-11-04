import { Textarea, Heading, HStack } from '@chakra-ui/react'
import { BASE_SHADOW } from 'shared/constants'

interface IProps {
  changeJsonInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  jsonInput: string
  prettifyOnBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  isError: boolean
}

const textAreaStyle = {
  rows: 30,
  size: 'sm',
  variant: 'filled',
  backgroundColor: 'white',
  borderRadius: 10,
  maxW: 600,
  boxShadow: BASE_SHADOW,
}

export const Editor: React.FC<IProps> = ({
  changeJsonInput,
  jsonInput,
  prettifyOnBlur,
  isError,
}) => (
  <HStack py="20px" justifyContent="center" flexDirection="column">
    <Heading mb="32px">Configure your form</Heading>
    <Textarea
      {...textAreaStyle}
      onChange={changeJsonInput}
      value={jsonInput}
      onBlur={prettifyOnBlur}
      isInvalid={isError}
    />
  </HStack>
)
