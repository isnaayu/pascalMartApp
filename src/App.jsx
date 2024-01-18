import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import LandingPage from "./component/LandingPage"
import EditUser from './component/EditUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/transaction' element={<></>}/>
        <Route path='/edit' element={<EditUser/>}/>
        <Route path='/recap' element={<></>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
