import { Editor } from 'components/Editor'
import { Navigation } from 'components/Navigation'
import { Form } from 'components/Form'
import { MainContainer } from 'components/ui/MainContainer'

import { useEditor } from './hooks/useEditor'
import { useTabs } from './hooks/useTabs'
import { useAdapter } from './hooks/useAdapter'

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur, insertDataToInput, isError } = useEditor()

  const { changeTab } = useTabs()

  const adaptedData = useAdapter(jsonInput)

  return (
    <MainContainer>
      <Navigation
        changeTab={changeTab}
        insertDataToInput={insertDataToInput}
        tips={adaptedData?.tips}
        isError={isError}
      />
      <Editor
        jsonInput={jsonInput}
        changeJsonInput={changeJsonInput}
        prettifyOnBlur={prettifyOnBlur}
        isError={isError}
      />
      <Form formData={adaptedData?.formData} />
    </MainContainer>
  )
}
