import { Button, Stack } from '@chakra-ui/react'
import { TabTypes } from '../../interfaces'

interface IProps {
  changeTab: (tab: TabTypes) => void
  currentTab: TabTypes
}

export const Tabs: React.FC<IProps> = ({ changeTab, currentTab }) => {
  const isEditorOpen = currentTab === TabTypes.EDITOR
  return (
    <Stack direction="row" justifyContent="center" spacing="24px">
      <Button
        onClick={() => changeTab(TabTypes.EDITOR)}
        size="lg"
        type="button"
        variant={isEditorOpen ? 'solid' : 'outline'}
      >
        Editor
      </Button>
      <Button
        onClick={() => changeTab(TabTypes.FORM)}
        size="lg"
        type="button"
        variant={!isEditorOpen ? 'solid' : 'outline'}
      >
        Form
      </Button>
    </Stack>
  )
}
