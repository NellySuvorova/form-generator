import { ChakraProvider } from '@chakra-ui/react'

import { Main } from 'controllers/Main'

export function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </div>
  )
}
