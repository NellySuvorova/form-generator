import { Editor } from 'components/Editor'
import { Navigation } from 'components/Navigation'
import { Form } from 'components/Form'
import { Grid, GridItem, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

import { useEditor } from './hooks/useEditor'
import { useTabs } from './hooks/useTabs'

// вынести обертки в ui слой
export const Main = () => {
  const { jsonInput, changeJsonInput, prettifyOnBlur, isError, insertDataToInput } = useEditor()
  const { changeTab } = useTabs()

  return (
    <Tabs isFitted variant="unstyled" colorScheme="gray">
      <Grid templateColumns="1fr 3fr" gap={4} height="100vh">
        <GridItem backgroundColor="rgb(51, 51, 51)" px="20px" pt="20px">
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
            <Form jsonInput={jsonInput} />
          </TabPanel>
        </TabPanels>
      </Grid>
    </Tabs>
  )
}
