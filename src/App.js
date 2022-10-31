import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import StartPage from './components/StartPage'
import SignUp from './components/SignUp'
import PlayGame from './components/PlayGame'
// import Effect from './components/Effect'
import NotFound from './components/NotFound'
import TheCave from './components/TheCave'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/playgame' element={<PlayGame />} />
          <Route path='/thecave' element={<TheCave />} />
          {/* <Route path='/effect' element={<Effect />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
