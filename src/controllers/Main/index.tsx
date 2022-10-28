import React from 'react'
import { Editor } from '../../components/Editor'
import { Tabs } from '../../components/Tabs'
import { Form } from '../../components/Form'

import { useEditor } from '../../hooks/useEditor'
import { useTabs } from '../../hooks/useTabs'
import { TabTypes } from '../../interfaces'

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur } = useEditor()
  const { changeTab, currentTab } = useTabs()

  return (
    <>
      <Tabs changeTab={changeTab} currentTab={currentTab} />
      {currentTab === TabTypes.EDITOR && (
        <Editor
          jsonInput={jsonInput}
          changeJsonInput={changeJsonInput}
          prettifyOnBlur={prettifyOnBlur}
        />
      )}

      {currentTab === TabTypes.FORM && <Form jsonInput={jsonInput} />}
    </>
  )
}
