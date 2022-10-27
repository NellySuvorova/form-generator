import { useState } from "react";
import { Main } from "./controllers/Main";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </div>
  );
}

export default App;
