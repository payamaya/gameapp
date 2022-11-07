
 import {BrowserRouter, Routes, Route} from "react-router-dom"
 import React from "react";
 import Login from "./components/Login";
 import StartPage from "./components/StartPage"
 import MemicPage from "./components/MemicPage";
 import FlamingLakePage from "./components/FlamingLakePage";
 import GaruruNest from "./components/GaruruNest";
function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>

      <Route path = "/" element = {<StartPage/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/MemicPage" element = {<MemicPage/>} />
      <Route path = "/FlamingLakePage" element = {<FlamingLakePage/>} />
      <Route path = "/GaruruNest" element = {<GaruruNest/>} />

    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
