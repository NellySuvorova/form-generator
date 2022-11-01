import { Container } from '@chakra-ui/react'
import { Editor } from 'components/Editor'
import { Tabs } from 'components/Tabs'
import { Form } from 'components/Form'
import { TabTypes } from 'interfaces'

import { useEditor } from './hooks/useEditor'
import { useTabs } from './hooks/useTabs'

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur, isError } = useEditor()
  const { changeTab, currentTab } = useTabs()

  return (
    <>
      <Tabs changeTab={changeTab} currentTab={currentTab} />
      <Container>
        {currentTab === TabTypes.EDITOR && (
          <Editor
            jsonInput={jsonInput}
            changeJsonInput={changeJsonInput}
            prettifyOnBlur={prettifyOnBlur}
            isError={isError}
          />
        )}
        {currentTab === TabTypes.FORM && <Form jsonInput={jsonInput} />}
      </Container>
    </>
  )
}
