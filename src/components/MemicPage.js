import React from 'react'
import { Link } from 'react-router-dom'


const MemicPage = () => {
  return (

   <div className='containerMemic'>
      <div className='memicDiv'>
                                <div className='textMemic'>
                                  <h2 className='memicHead'>MemIc Forest</h2>
                                          <p className='memicText'>Welcome to the adventure of Memic forest. <br></br>
                                          <br></br>
                                          To complete the game you have to defeat<br></br> the evil Gururu
                                          who guards the forest.<br></br> You will have to make smart choices<br></br>
                                          in order to complete the game.<br></br>
                                          The roads will be challenging and ingenious to pass.
                                          <br></br>
                                          <br></br>
                                          Hurry, and remember, you only got 3 lives.
                                        </p>
                                </div>

                <div className='buttonDivMemic'>
                        <div className='memicButton'>
                                <Link className='links' to='/thecave'>
                                  <button className='memicFight'>Fight</button>
                                </Link>
                        </div>

                        <div className='memicButton'>
                                <Link className='links' to='/playgame'>
                                    <button className='memicRun'>Run</button>
                                </Link>
                        </div>
                </div> 


    </div>
  )
}

export default MemicPage
