
 import {BrowserRouter, Routes, Route} from "react-router-dom"
 import React from "react";
 import Login from "./components/Login";
 import StartPage from "./components/StartPage";



function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <h1>Hello world </h1>
      <h6>Heloooooooooooooo</h6>

      <Login />
=======
    <div>
    <BrowserRouter>

    <Routes>

      <Route path = "/" element = {<StartPage/>} />
      <Route path = "/login" element = {<Login/>} />

    </Routes>
    </BrowserRouter>

>>>>>>> 16590644e35e036ffd6d6fe886f00839ae875db0
    </div>
  )
}

export default App
