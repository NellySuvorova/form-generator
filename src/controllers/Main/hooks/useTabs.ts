import { useState } from 'react'
import { TabTypes } from 'interfaces'

export const useTabs = () => {
  const [currentTab, setTabs] = useState<number>(TabTypes.EDITOR)

  const changeTab = (tab: number) => {
    setTabs(tab)
  }

  return { currentTab, changeTab }
}
