import React from 'react'
import { Link } from 'react-router-dom'
import cave from '../images/cavecard.png'
import forest from '../images/forestcard.png'


const startPage = () => {
  return (
    <div className='container'>
      <div className='startContainer'>
        <h1 className='headStart'> WELCOME TO THE ADVENTURE </h1>
        <div className='textStart'>
          <p>
            Welcome to the adventure of Memic forest. <br></br>
            To complete the game you have to defeat the evil Gururu
            who guards the forest.<br></br> You will have to make smart choices
            in order to complete the game.<br></br>
            The roads will be challenging and somewhat ingenious to pass.
            <br></br>
            <br></br>
            Hurry!!! <br></br> Remember, you only got 3 lives.
          </p>
        </div>

                      

        
                        <div className='startCardContainer'>

                                <div className='cardColumn'>
                                  <div className='cardStart'>
                                       <img src={cave} alt="cave" />    
                                  </div>
                                </div>

                                <div className='cardColumn'>
                                  <div className='cardStart'>
                                       <img src={forest} alt="forest" />    
                                  </div>
                                </div>
                        </div>

                        <div className='startButton'>
          <Link className='links' to='/login'>
            <button className='buttonStart'> Enter</button>
          </Link>
        </div>
      </div>

      
      
    </div>
  )
}

export default startPage
