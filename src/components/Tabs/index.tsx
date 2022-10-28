import { TabTypes } from '../../interfaces'

interface IProps {
  changeTab: (tab: TabTypes) => void
  currentTab: TabTypes
}

// TODO
// 1. make buttons disable on active tab and change color
export const Tabs: React.FC<IProps> = ({ changeTab, currentTab }) => {
  return (
    <div>
      <button onClick={() => changeTab(TabTypes.EDITOR)}>Editor</button>
      <button onClick={() => changeTab(TabTypes.FORM)}>Form</button>
    </div>
  )
}
