import React from 'react'
import { TabList, Tab, Box, ListItem, UnorderedList, Heading } from '@chakra-ui/react'
import { FieldTypes } from 'interfaces'
import { Tips } from 'components/ui/Tips'

interface IProps {
  insertDataToInput: (tab: FieldTypes) => void
  isError: boolean
  tips?: string[]
}

const linkHoverColor = '#3182ce'

export const Navigation: React.FC<IProps> = ({ insertDataToInput, tips, isError }) => {
  const componentsTypes = Object.values(FieldTypes)

  const tabProps = { color: 'white', _selected: { color: 'white', bg: 'blue.500' } }

  return (
    <>
      <TabList>
        <Tab {...tabProps}>Editor</Tab>
        <Tab {...tabProps}>Form</Tab>
      </TabList>
      <Box mt="40px" color="white">
        <Heading size="sm" mb="10px">
          Components available:
        </Heading>
        <UnorderedList spacing="2">
          {componentsTypes.map((type: FieldTypes) => (
            <ListItem
              key={type}
              _hover={{ color: linkHoverColor }}
              cursor="pointer"
              onClick={() => insertDataToInput(type)}
            >
              {type}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Tips tips={tips} isError={isError} />
    </>
  )
}
