import { TabList, Tab } from '@chakra-ui/react'

interface IProps {
  changeTab: (tab: number) => void
}

export const Navigation: React.FC<IProps> = ({ changeTab }) => (
  <TabList onChange={changeTab}>
    <Tab color="white" _selected={{ color: 'white', bg: 'blue.500' }}>
      Editor
    </Tab>
    <Tab color="white" _selected={{ color: 'white', bg: 'blue.500' }}>
      Form
    </Tab>
  </TabList>
)
