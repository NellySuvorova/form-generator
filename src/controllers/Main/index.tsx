import { Editor } from 'components/Editor'
import { Navigation } from 'components/Navigation'
import { Form } from 'components/Form'
import { Grid, GridItem, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

import { useEditor } from './hooks/useEditor'
import { useTabs } from './hooks/useTabs'

// вынести обертки в ui слой
export const Main = () => {
  const {
    jsonInput,
    changeJsonInput,
    prettifyOnBlur,
    insertDataToInput,
    parseJsonAndSetErrors,
    isError,
  } = useEditor()
  const { changeTab } = useTabs()

  return (
    <Tabs isFitted variant="solid-rounded" colorScheme="gray">
      <Grid templateColumns="1fr 3fr" height="100vh">
        <GridItem backgroundColor="#323648" px="20px" pt="20px">
          <Navigation changeTab={changeTab} insertDataToInput={insertDataToInput} />
        </GridItem>
        <TabPanels>
          <TabPanel>
            <Editor
              jsonInput={jsonInput}
              changeJsonInput={changeJsonInput}
              prettifyOnBlur={prettifyOnBlur}
              isError={isError}
            />
          </TabPanel>
          <TabPanel>
            <Form jsonInput={jsonInput} parseJsonAndSetErrors={parseJsonAndSetErrors} />
          </TabPanel>
        </TabPanels>
      </Grid>
    </Tabs>
  )
}
