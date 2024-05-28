import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/about" element={<About/>}></Route>
      <Route path = "/signin" element={<SignIn/>}></Route>
      <Route path = "/signup" element={<SignUp/>}></Route>
      <Route element={<PrivateRoute/>}>
          <Route path = "/dashboard" element={<Dashboard/>}></Route>
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />}></Route>
      </Route>
      <Route path = "/projects" element={<Projects/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App