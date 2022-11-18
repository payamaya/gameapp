import React from 'react'
import '../styles/gameenter.css'
import { Link } from 'react-router-dom'

const GameEnter = () => {
  return (
    <div className='gameContainer'>

    <div id="loading-wrapper">
        <div id="loading-text">MEMIC</div>
        <div id="loading-content"></div>
    </div>
        

    <div className='divGameText'>
        <h1 className='divGameHead'>MemIc Forest <br></br>oF GUrUrU</h1>
        

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
