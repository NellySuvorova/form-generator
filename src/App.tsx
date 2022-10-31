import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './controllers/Main'
import './App.css'

export function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </div>
  )
}
