import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App