import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/startpage.css'
import Audio from './Audio'
import Sharklake from '../images/sharklake.png'
import Gururu from '../images/gururunest.png'
import Forest from '../images/forestcard.png'



const startPage = () => {
  return (
    <div className='container'>
      <div className='startContainer'>
        <h1 className='headStart'> WeLcoMe To The ADventUre </h1>
      

            <p className='startGameText'>Welcome to the adventure of Memic Forest.<br></br>
            <br></br>
            To complete the game you have to defeat<br></br>
           the evil Gururu, who guards the forest. <br></br>
           <br></br>
            Be sure to make smart choices to complete the game. <br></br>
            Hurry!! <br></br>
            And remember you only have 3 lives!</p>

            <div className='cardContainer'>
                <div  className='imgCard'>
                    <img className='imgCard'  src={Sharklake} ></img>
                </div>
                <div className='imgCard'>
                    <img   className='imgCard' src={Gururu} ></img>
                </div>
                <div  className='imgCard'>
                    <img   className='imgCard' src={Forest} ></img>
                </div>
            </div>
   
        <div className='startButton'>
          <Link className='links' to='/memicpage'>

            <button className='buttonStart'>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default startPage
