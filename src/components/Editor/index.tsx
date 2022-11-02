import { Textarea, Heading, HStack } from '@chakra-ui/react'

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
      backgroundColor="white"
      boxShadow="0 8px 48px -8px rgb(0 0 0 / 15%)"
      maxW={600}
      borderRadius={10}
    />
  </HStack>
)
