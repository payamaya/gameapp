import React from "react";
import StartPage from "./StartPage";
import GaruruNest from './GaruruNest'
import MemicPage from "./MemicPage";



const ComProps = () => {

const data = {
            welcome: 'Welcome to the adventure',
            flaming: 'Flamin Lake',
}

return (
    <div>
        <StartPage data={data} />
    </div>
)

};


export default ComProps