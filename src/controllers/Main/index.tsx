import { Editor } from 'components/Editor'
import { Navigation } from 'components/Navigation'
import { Form } from 'components/Form'
import { MainContainer } from 'components/ui/MainContainer'

import { useEditor } from './hooks/useEditor'

import { useAdapter } from './hooks/useAdapter'

export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur, insertDataToInput, isError } = useEditor()

  const convertationResult = useAdapter(jsonInput)

  return (
    <MainContainer>
      <Navigation
        insertDataToInput={insertDataToInput}
        tips={convertationResult?.tips}
        isError={isError}
      />
      <Editor
        jsonInput={jsonInput}
        changeJsonInput={changeJsonInput}
        prettifyOnBlur={prettifyOnBlur}
        isError={isError}
      />
      <Form formData={convertationResult?.formData} />
    </MainContainer>
  )
}
