import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/gameEnter.css'
import Audio from './Audio'
const GameEnter = () => {
  return (
    <div className='game-container'>
      <Audio />
      <h1>Memmic Fórest of Gururu</h1>
      <h4>Please log in if you have an account</h4>
      <h3>No account? Just sign in and you are ready to play</h3>
      <Link id='login-btn' className='login-btn' to='/login'>
        Login
      </Link>
      <Link id='login-btn' className='login-btn' to='/signup'>
        SignUp
      </Link>
    </div>
  )
}

export default GameEnter
