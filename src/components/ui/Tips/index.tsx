import { OrderedList, ListItem, Box, Heading, Center, AlertIcon } from '@chakra-ui/react'

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
        <Center>JSON contains errors.</Center>
      ) : (
        <>
          <Heading fontSize="md" marginBottom="20px" textAlign="center">
            A few more steps to finish your form!
          </Heading>
          <OrderedList spacing={3}>
            {tips.map((tip) => (
              <ListItem>{tip}</ListItem>
            ))}
          </OrderedList>
        </>
      )}
    </Box>
  )
}
