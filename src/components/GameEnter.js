import React from 'react'
import '../styles/gameEnter.css'
import { Link } from 'react-router-dom'

const GameEnter = () => {
  return (
    <div className='gameContainer'>
      <div className='divGameText'>
        <div id='loading-wrapper'>
          <div id='loading-text'>MEMIC</div>
          <div id='loading-content'></div>
        </div>
        <h1 className='divGameHead'>Memic Forest of Gururu</h1>

        <div className='gameButtons'>
          <Link to='/login'>
            {' '}
            <button className='buttonsGame'>Log In</button>
          </Link>
          <Link to='/signup'>
            {' '}
            <button className='buttonsGame'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default GameEnter
