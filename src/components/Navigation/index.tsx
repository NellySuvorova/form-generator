import { TabList, Tab, Box, ListItem, UnorderedList, Text } from '@chakra-ui/react'
import { FieldTypes } from 'interfaces'

interface IProps {
  changeTab: (tab: number) => void
  insertDataToInput: (tab: FieldTypes) => void
}

export const Navigation: React.FC<IProps> = ({ changeTab, insertDataToInput }) => {
  const componentsTypes = Object.values(FieldTypes)

  return (
    <>
      <TabList onChange={changeTab}>
        <Tab color="white" _selected={{ color: 'white', bg: 'blue.500' }}>
          Editor
        </Tab>
        <Tab color="white" _selected={{ color: 'white', bg: 'blue.500' }}>
          Form
        </Tab>
      </TabList>
      <Box mt="40px" color="white">
        <Text size="xl" mb="10px" fontWeight="600">
          Components available:
        </Text>
        <UnorderedList spacing="2">
          {componentsTypes.map((type: FieldTypes) => (
            <ListItem
              key={type}
              _hover={{ color: 'red' }}
              cursor="pointer"
              onClick={() => insertDataToInput(type)}
            >
              {type}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  )
}
