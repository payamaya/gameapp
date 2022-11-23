import { Link } from "react-router-dom";
import React from 'react'

const MemicChoice = () =>{
 
 
    return(

        
        <div>
            <div>
                <h2> Welcome to my dunjan !!</h2>
                

        <p> My name is Liovanda im the memic.
            thousands of years have I been here in memic forest. And the best thing i can do is same as you!
            now the choice is yours to make!


           
        </p>
                
                       <button ><Link className="Memic" to ="/MemicDunjan/p1">Try to open cage</Link></button> 
                

                
                       <button><Link className="Memic" to ="/MemicDunjan/p2">Fight</Link></button> 
                

                
            </div>
            
        </div>
        
    )
}

export default MemicChoice;