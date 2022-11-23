import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/flaminglake.css";
import React from "react";
import { useNavigate } from 'react-router-dom'





const ButtonReuse =()=>{

    const [] = useState(false);
  const [] = useState(false);


  const [userLife, setUserLife] = useState(null);
  const navigate = useNavigate()

  const getLifeFromLocalstorage = () => {
    const life = JSON.parse(localStorage.getItem("life"));
    if (life > 0) {

      setUserLife(life-1);
    }
   
    console.log(life)
  };



  const handleButton = () => {
     if (userLife > 0 ) {
      setUserLife(userLife -1)
     }
    else if (userLife === 0){
      alert('Gameover, du har förlorat alla liv')
      navigate('/login')
    } 


    return(

        <div>
                    
             <div >
            <button  onClick={handleButton}>
              Left
            </button>

        </div>

        </div>
    )
  }
    
  }


export default ButtonReuse