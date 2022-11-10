
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/flaminglake.css'
const FlamingLakePage = () => {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)

  const [leftThree, setLeftThree] = useState(false)
  const [rightThree, setRightThree] = useState(false)
  // Set Disable on the next two choice if u are right you disable what the road u passed.

  const handleLeft = () => {
    setLeft(true)
    alert('Rätt')
  }

  const handleRight = () => {
    setRight(true)
    alert(' Du förlorade 1 liv ')
  }

  const handleLeftLast = () => {
    setLeft(true)
    alert('Fel')
  }

  const handleRightLast = () => {
    setRight(true)
    alert(' du kom vidare Grattis ')
  }

//   return (
//     <div className='containerlake'>
//       <div className='FlamingLake-item'>
//         <h2 className='h2'>FlamingLake</h2>
//         <button onClick={handleLeft}>Left</button>
//         <button onClick={handleRight}>Right</button>
//         <br />

//         <button onClick={handleLeft}>Left</button>
//         <button onClick={handleRight}>Right</button>
//         <br />

//         <button onClick={handleLeftLast}>Left</button>
//         <Link className='links' to='/GaruruNest'>
//           <button onClick={handleRightLast}>Right</button>
//         </Link>
//       </div>

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import '../styles/FlamingLake.css'

// const FlamingLakePage = () => {
//   const [left, setLeft] = useState(false)
//   const [right, setRight] = useState(false)

//   const [leftThree, setLeftThree] = useState(false)
//   const [rightThree, setRightThree] = useState(false)
//   // Set Disable on the next two choice if u are right you disable what the road u passed.

//   const handleLeft = () => {
//     setLeft(true)
//     alert('Rätt')
//   }

//   const handleRight = () => {
//     setRight(true)
//     alert(' Du förlorade 1 liv ')
//   }

//   const handleLeftLast = () => {
//     setLeft(true)
//     alert('Fel')
//   }

//   const handleRightLast = () => {
//     setRight(true)
//     alert(' du kom vidare Grattis ')
//   }

//   return (
//     <div className='containerlake'>
//       <div className='FlamingLake-item'>
//         <h2 className='h2'>FlamingLake</h2>
//         <button onClick={handleLeft}>Left</button>
//         <button onClick={handleRight}>Right</button>
//         <br />

//         <button onClick={handleLeft}>Left</button>
//         <button onClick={handleRight}>Right</button>
//         <br />

// <<<<<<< HEAD
//         <button onClick={handleLeftLast}>Left</button>
//         <Link className='links' to='/GaruruNest'>
//           <button onClick={handleRightLast}>Right</button>
//         </Link>
//       </div>
// =======
//     const handleLeftLast = () => {
//         setLeft(true);
//         alert("Fel")

       
//     }

//     const handleRightLast = () =>{
//         setRight(true);
//         alert(" du kom vidare Grattis ")
//     }

//     return <div className="containerlake">
//     <div className="FlamingLake-item">
//     <h2 className="h2">FlamingLake</h2>
//     <button onClick={handleLeft}>Left</button>
//     <button onClick={handleRight}>Right</button>
//     <br/>


//     <button onClick={handleLeft}>Left</button>
//     <button onClick={handleRight}>Right</button>
//     <br/>


//     <button onClick={handleLeftLast}>Left</button>
//     <Link className="links" to = "/GaruruNest">
//     <button onClick={handleRightLast}>Right</button>
//     </Link>

// >>>>>>> 7beb76b683176ab68863f0330273256fe06a78c3
//     </div>
//   )
}

export default FlamingLakePage
