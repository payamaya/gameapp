import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/startpage.css'
import Sharklake from '../images/sharklake.png'
import Gururu from '../images/gururunest.png'
import Forest from '../images/forestcard.png'
import { useState, useEffect } from "react";
import '../styles/button.css'



const startPage = () => {

  const [userLife, setUserLife] = useState(null);

   const getLifeFromLocalstorage = () => {
    const life = JSON.parse(localStorage.getItem("life"));
    if (life > 0) {
    }
     console.log(life)
  };
  getLifeFromLocalstorage();
  useEffect(() => {
  }, []);
  


  return (

    <div className='container'>
   
      <div className='startContainer'>
        <h1 className='headStart'> WeLcoMe To The ADventUre </h1>
      

            <p className='startGameText'>Welcome to the adventure of Memic Forest.<br></br>
            <br></br>
            To complete the game you have to defeat<br></br>
           the evil Garuru, who guards the forest. <br></br>
           <br></br>
            Be sure to make smart choices to complete the game. <br></br>
            Hurry!! <br></br>
            And remember you only have 3 lives!</p>

            <div className='cardContainer'>
                <div  className='imgCard'>
                    <img className='imgCard' alt="shark" src={Sharklake} ></img>
                </div>
                <div className='imgCard'>
                    <img   className='imgCard'  alt="garuru" src={Gururu} ></img>
                </div>
                <div  className='imgCard'>
                    <img   className='imgCard' alt="forest" src={Forest} ></img>
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
