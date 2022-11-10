

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
        <h1 className='divGameHead'>Memic Forest of Gururu</h1>
        <h3 className='gameText'>Please Login if you have an account.<br></br>
        <br></br>
        No account?<br></br>
        Just sign up and you are ready to play!</h3>

        <div className='gameButtons'>
            <Link to='/login'> <button className='buttonsGame' href="javascript:void(0);" >Log In</button></Link>
            <Link to='/signup'> <button  className='buttonsGame' href="javascript:void(0);">Sign Up</button></Link>
        </div>
        
    </div>

</div>

export default GameEnter
