import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App