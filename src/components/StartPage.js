import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/startpage.css'
import Audio from './Audio'
const startPage = () => {
  return (
    <div className='container'>
      <div className='startContainer'>
        <h1> WELCOME TO THE ADVENTURE </h1>
        <div className='textStart'>
          <p>
            <Audio />
            <span> Welcome to the adventure of Memic forest.</span>
            <span>You will have to make smart choices.</span>
            <span>
              To complete the game you have to defeat the evil Gururu who guards
              the forest.
            </span>
            <span>
              The roads will be challenging and somewhat ingenious to pass.
            </span>
            <span> Hurry, and remember, you only got 3 lives.</span>
          </p>
        </div>
        <div className='startButton'>
          <Link className='links' to='/gameenter'>
            <button className='buttonStart'></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default startPage
