
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

    </div>
  )
}

export default App
