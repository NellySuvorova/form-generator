import { HStack, Textarea, Heading } from '@chakra-ui/react'

interface IProps {
  changeJsonInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  jsonInput: string
  prettifyOnBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  isError: boolean
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
      size="sm"
      rows={30}
      onChange={changeJsonInput}
      value={jsonInput}
      onBlur={prettifyOnBlur}
      isInvalid={isError}
      variant="filled"
      maxW={600}
    />
  </HStack>
)
