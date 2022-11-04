import { OrderedList, ListItem, Box, Heading, Center, Link } from '@chakra-ui/react'

export const Tips = ({ tips, isError }: { isError: boolean; tips?: string[] }) => {
  if (!isError && !tips?.length) {
    return null
  }

  return (
    <Box
      mt="50px"
      backgroundColor="rgb(254, 215, 215)"
      padding="16px"
      borderRadius="8px"
      overflow="scroll"
      maxHeight="350px"
    >
      {isError ? (
        <Center>
          <Heading fontSize="md">
            JSON contains errors! You may use{' '}
            <Link
              href="https://jsonlint.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="blue"
            >
              this tool
            </Link>{' '}
            to validate your input
          </Heading>
        </Center>
      ) : (
        <>
          <Heading fontSize="md" marginBottom="20px" textAlign="center">
            A few more steps to finish your form!
          </Heading>
          <OrderedList spacing={3}>
            {tips && tips.map((tip) => <ListItem>{tip}</ListItem>)}
          </OrderedList>
        </>
      )}
    </Box>
  )
}
