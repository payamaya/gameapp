import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import StartPage from './components/StartPage'
import SignUp from './components/SignUp'
import PlayGame from './components/PlayGame'
// import Effect from './components/Effect'
import NotFound from './components/NotFound'
import TheCave from './components/TheCave'
import MemicPage from './components/MemicPage'
import MemicDunjan from './components/MemicDunjan'
// import FlamingLakePage from './components/FlamingLakePage'
import GameEnter from './components/GameEnter'
import GaruruNest from './components/GaruruNest'
import Button from './components/Button'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/gameenter' element={<GameEnter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/playgame' element={<PlayGame />} />
          <Route path='/thecave' element={<TheCave />} />
          <Route path='/memicpage' element={<MemicPage />} />
          <Route path='/memicdunjan' element={<MemicDunjan />} />
          {/* <Route path='/flaminglakepage' element={<FlamingLakePage />} /> */}
          <Route path='/GaruruNest' element={<GaruruNest />} />
          {/* <Route path='/effect' element={<Effect />} /> */}
          <Route path='button' element={<Button />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
