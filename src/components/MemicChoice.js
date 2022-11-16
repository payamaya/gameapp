import { Link } from "react-router-dom";

const MemicChoice = () =>{
    return(
        <div>
            <div>
                <h2>MemicChoice</h2>
                <h2>Welcome to my dunjan, you are now locked in my cage </h2>

        <p>My name is Liovanda im the memic.
            thousands of years have I been here in memic forest. And the best thing i can do is same as you!
            now the choice is yours to make!


           
        </p>
                <ul>
                    <li>
                        <Link className="Memic" to ="/MemicDunjan/p1">p1</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link className="Memic" to ="/MemicDunjan/p2">p2</Link>
                    </li>
                </ul>

                
            </div>
            
        </div>
        
    )
}

export default MemicChoice;