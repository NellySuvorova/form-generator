import React from 'react'
import { Grid, GridItem, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

export const MainContainer = ({ children }: { children: React.ReactChild[] }) => (
  <Tabs isFitted variant="solid-rounded" colorScheme="gray">
    <Grid templateColumns="1fr 3fr" height="100vh">
      <GridItem backgroundColor="#323648" px="20px" pt="20px">
        {children[0]}
      </GridItem>
      <TabPanels>
        <TabPanel>{children[1]}</TabPanel>
        <TabPanel>{children[2]}</TabPanel>
      </TabPanels>
    </Grid>
  </Tabs>
)
