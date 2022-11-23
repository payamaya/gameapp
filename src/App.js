import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import StartPage from './components/StartPage'
import SignUp from './components/SignUp'
import PlayGame from './components/PlayGame'
// import Effect from './components/Effect'
import NotFound from './components/NotFound'
import TheCave from './components/TheCave'
// import Audio from './components/Audio'
import MemicPage from './components/MemicPage'
import FlamingLakePage from './components/FlamingLakePage'
import GaruruNest from './components/GaruruNest'
import GameEnter from './components/GameEnter'
import Button from './components/Button'
import ButtonLife from './components/ButtonLife'
import DirectionButton from './components/DirectionButton'
import CountLife from './components/CountLife'
import FlamingLakeTwo from './components/FlamingLakeTwo'
import FlamingLakeThree from './components/FlamingLakeThree'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameEnter />} />
          <Route path='/startpage' element={<StartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/memicpage' element={<MemicPage />} />
          <Route path='/thecave' element={<TheCave />} />
          <Route path='/playgame' element={<PlayGame />} />

          <Route path='/thecave' element={<TheCave />} />
          <Route path='/memicpage' element={<MemicPage />} />
          <Route path='/flaminglakepage' element={<FlamingLakePage />} />
          <Route path='/flaminglaketwo' element={<FlamingLakeTwo />} />
          <Route path='/flaminglakethree' element={<FlamingLakeThree />} />
          <Route path='/garurunest' element={<GaruruNest />} />
          <Route path='/button' element={<Button />} />
          <Route path='/buttonlife' element={<ButtonLife />} />
          <Route path='/directionbutton' element={<DirectionButton />} />
          {/* <Route path='/effect' element={<Effect />} /> */}
          <Route path='countlife' element={<CountLife />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
