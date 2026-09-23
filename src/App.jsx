import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>  
    </>
  )
}

export default App
