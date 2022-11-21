import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import StartPage from './components/StartPage'
import SignUp from './components/SignUp'
import PlayGame from './components/PlayGame'
// import Effect from './components/Effect'
import NotFound from './components/NotFound'
import TheCave from './components/TheCave'
import Audio from './components/Audio'
import MemicPage from './components/MemicPage'

import MemicDunjan from './components/MemicDunjan'
import MemicChoice from './components/MemicChoice'

import FlamingLakePage from './components/FlamingLakePage'
import GaruruNest from './components/GaruruNest'
import GameEnter from './components/GameEnter'
import Button from './components/Button'
import DirectionButton from './components/DirectionButton'
import CountLife from './components/CountLife'


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
          
          <Route path='/playgame' element={<PlayGame />} />
          <Route path='/thecave' element={<TheCave />} />
          

          
          <Route path = '/MemicDunjan/p1/FlamingLakePage' element={<FlamingLakePage/>}/>
          <Route path = '/MemicDunjan/p2/MemicDunjan' element={<MemicChoice/>}/>
          <Route path='/MemicDunjan/:pageId' element={<MemicDunjan/>} />




          <Route  path='/MemicDunjan' element={<MemicChoice/>}/>



          <Route path='/flaminglakepage' element={<FlamingLakePage />} />
          <Route path='/garurunest' element={<GaruruNest />} />
          <Route path='/button' element={<Button />} />
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
