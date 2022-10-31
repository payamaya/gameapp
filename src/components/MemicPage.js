import { Link } from "react-router-dom"
const MemicPage = () =>{
return <div className="container">
    <div className="startContainer">
    
    <div className="textStart">

    <h2>Memic Forest</h2>
    <p>
        Welcome to the adventure of Memic forest. <br></br>
        To complete the game you have to defeat the evil Gururu<br></br>
        who guards the forest. You will have to make smart choices<br></br>
        in order to complete the game.<br></br>
        The roads will be challenging and somewhat ingenious to pass.<br></br>
        <br></br>
       
        Hurry, and remember, you only got 3 lives.




        
    </p>
     <button className="startButton">Fight</button>
     
     <Link className="links" to = "/FlamingLakePage">
        <button>Run</button>
    </Link>
    </div>
</div>
</div>

}   


export default MemicPage;