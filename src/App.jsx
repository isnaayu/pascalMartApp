import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { ChakraProvider } from '@chakra-ui/react'
import PurchaseRecap from './pages/PurchaseRecap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ChakraProvider>
        <PurchaseRecap></PurchaseRecap>
      </ChakraProvider>
      
    </>
  )
}

export default App
