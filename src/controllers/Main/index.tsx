import { Editor } from 'components/Editor'
import { Navigation } from 'components/Navigation'
import { Form } from 'components/Form'
import { MainContainer } from 'components/ui/MainContainer'

import { useEditor } from './hooks/useEditor'
import { useTabs } from './hooks/useTabs'

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur, insertDataToInput, isError } = useEditor()

  const { changeTab } = useTabs()

  return (
    <MainContainer>
      <Navigation changeTab={changeTab} insertDataToInput={insertDataToInput} />
      <Editor
        jsonInput={jsonInput}
        changeJsonInput={changeJsonInput}
        prettifyOnBlur={prettifyOnBlur}
        isError={isError}
      />
      <Form jsonInput={jsonInput} />
    </MainContainer>
  )
}
