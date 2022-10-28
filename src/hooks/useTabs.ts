import React, { useState } from 'react'
import { TabTypes } from '../interfaces'

export const useTabs = () => {
  const [currentTab, setTabs] = useState(TabTypes.EDITOR)

  const changeTab = (tab: TabTypes) => {
    setTabs(tab)
  }

  return { currentTab, changeTab }
}
