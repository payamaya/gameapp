import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/flaminglake.css";
import React from "react";
import { useNavigate } from 'react-router-dom'


//const [leftThree ] = useState(false);
//const [rightThree] = useState(false);
// Set Disable on the next two choice if u are right you disable what the road u passed.

const FlamingLakePage = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);


  const [userLife, setUserLife] = useState(null);
  const navigate = useNavigate()

  const getLifeFromLocalstorage = () => {
    const life = JSON.parse(localStorage.getItem("life"));
    if (life > 0) {

      setUserLife(life-1);
    }
   
    console.log(life)
  };

  useEffect(() => {
  getLifeFromLocalstorage();
  }, []);

  //useEffect(() => {

 // })

  const handleLeft = () => {
    setLeft(true);
    alert("Rätt");
  };

  const handleRight = () => {
    if (userLife >0 ) {
      setUserLife(userLife -1)
    }
    alert(" Du förlorade 1 liv ");
    setRight(true);
   console.log(userLife)
  };

  const handleLeftLast = () => {
     if (userLife > 0 ) {
      setUserLife(userLife -1)
     }
    else if (userLife === 0){
      alert('Gameover, du har förlorat alla liv')
      navigate('/startpage')
    } 
    setLeft(true);
     
    //alert(" Du förlorade 1 liv ");
   console.log(userLife)
  };

  const handleRightLast = () => {
    setRight(true);
    alert(" du kom vidare Grattis ");
  };

  return (
    <div className="containerlake">
      <div className="FlamingLake-item">
        <h2 className="h2">FlaMinG LaKe</h2>

        <p className="textFlame">
          {" "}
          You have to make three choices in order to pass <br></br>
          through Flaming Lake. Will it be right or left?
        </p>

        <div className="buttonFlameDiv">
          <div className="btnFlame">
            <button className="flameBtn" onClick={handleLeft}>
              Left
            </button>
            <button className="flameBtn" onClick={handleRight}>
              Right
            </button>
          </div>

          <div className="btnFlame">
            <button className="flameBtn" onClick={handleLeft}>
              Left
            </button>
            <button className="flameBtn" onClick={handleRight}>
              Right
            </button>
          </div>

          <div className="btnFlame">
            <button className="flameBtn" onClick={handleLeftLast}>
              Left
            </button>
            <Link className="links" to="/garurunest">
              <button className="flameBtn" onClick={handleRightLast}>
                Right
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="fire">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default FlamingLakePage;
