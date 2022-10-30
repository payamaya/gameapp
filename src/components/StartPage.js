import React from 'react'
import { Link } from 'react-router-dom'

const startPage = () => {
  return (
    <div className='container'>
      <div className='startContainer'>
        <h1> WELCOME TO THE ADVENTURE </h1>
        <div className='textStart'>
          <p>
            Welcome to the adventure of Memic forest. <br></br>
            To complete the game you have to defeat the evil Gururu<br></br>
            who guards the forest. You will have to make smart choices<br></br>
            in order to complete the game.<br></br>
            The roads will be challenging and somewhat ingenious to pass.
            <br></br>
            <br></br>
            Hurry, and remember, you only got 3 lives.
          </p>
        </div>

        <div className='startButton'>
          <Link className='links' to='/login'>
            <button className='buttonStart'>Login / Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default startPage
