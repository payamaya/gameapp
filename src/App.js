import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import StartPage from './components/StartPage'
import SignUp from './components/SignUp'
import PlayGame from './components/PlayGame'
import NotFound from './components/NotFound'

<<<<<<< HEAD
 import {BrowserRouter, Routes, Route} from "react-router-dom"
 import React from "react";
 import Login from "./components/Login";
 import StartPage from "./components/StartPage"
 import MemicPage from "./components/MemicPage";
 import FlamingLakePage from "./components/FlamingLakePage";
function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>

      <Route path = "/" element = {<StartPage/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/MemicPage" element = {<MemicPage/>} />
      <Route path = "/FlamingLakePage" element = {<FlamingLakePage/>} />

    </Routes>
    </BrowserRouter>

=======
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/playgame' element={<PlayGame />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
>>>>>>> feature-branch
    </div>
  )
}

export default App
