import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/flaminglake.css";

const FlamingLakePage = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const [leftThree, setLeftThree] = useState(false);
  const [rightThree, setRightThree] = useState(false);
  // Set Disable on the next two choice if u are right you disable what the road u passed.

  const [userLife, setUserLife] = useState(null);

  const getLifeFromLocalstorage = () => {
    const life = JSON.parse(localStorage.getItem("life"));
    if (life) {
      setUserLife(life);
    }
    console.log(life);
  };

  useEffect(() => {
    getLifeFromLocalstorage();
  }, []);

  const handleLeft = () => {
    setLeft(true);
    alert("Rätt");
  };

  const handleRight = () => {
    setRight(true);
    alert(" Du förlorade 1 liv ");
  };

  const handleLeftLast = () => {
    setLeft(true);
    alert("Fel");
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

      <div class="fire">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
    </div>
  );
};

export default FlamingLakePage;
