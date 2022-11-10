
import React from "react";

import { useEffect, useState } from "react";


const GururuPage =() => {
  
    // New state
    const [inputValue, setInputValue ] = useState('')


  // Function to add to the new state
  const newQuestion = () => {
    const minimum = 1;
    const maximum = 5;
    const int1 = Math.floor(Math.random() * (maximum - minimum + 1));
    
 
  }
  
  // Run the function for the first time
  console.log()
  useEffect(() => newQuestion(), []);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAnswer = () => {
    // Check that total against the number
    if (newQuestion === inputValue) {
      alert('You won');
    } else  {
      alert('You lose');
    }

    // Call the function again
    newQuestion();
  }
  

  return (
    <div className="App">
      <h1>Math Game</h1>
      
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={handleAnswer}>Answer</button>
    </div>
  );

}




export default GururuPage
