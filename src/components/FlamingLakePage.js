
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/flaminglake.css'

        

const FlamingLakePage =() =>{

    const [left, setLeft] = useState(false)
    const [right, setRight] = useState (false)

    const [leftThree, setLeftThree] = useState(false)
    const [rightThree, setRightThree] = useState(false)
    // Set Disable on the next two choice if u are right you disable what the road u passed.

    const handleLeft = () => {
        setLeft(true);
        alert("Rätt")


    }

    const handleRight = () =>{
        setRight(true);
        alert(" Du förlorade 1 liv ")
    }

    const handleLeftLast = () => {
        setLeft(true);
        alert("Fel")


    }

    const handleRightLast = () =>{
        setRight(true);
        alert(" du kom vidare Grattis ")
    }



    return  ( <div className="containerlake">
    <div className="FlamingLake-item">
         <h2 className="h2">FlamingLake</h2>
                <button onClick={handleLeft}>Left</button>
                <button onClick={handleRight}>Right</button>
             <br/>


                <button onClick={handleLeft}>Left</button>
                <button onClick={handleRight}>Right</button>
             <br/>


        <button onClick={handleLeftLast}>Left</button>
                <Link className="links" to = "/garurunest">
        <button onClick={handleRightLast}>Right</button> </Link>
    </div>


</div>


    )

}

export default FlamingLakePage

  