// import React, { useState, useReducer } from 'react'
// import { useNavigate } from 'react-router-dom'
// import '../styles/button.css'
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 }
//     case 'decrement':
//       return { ...state, count: state.count - 1 }
//     case 'life':
//       return { ...state, score: (state.score = 1) }
//     case 'newBackgroundColor':
//       return {
//         ...state,
//         backgroundColor: !state.backgroundColor,
//         color: !state.color,
//         text: !state.text,
//         count: state.count - 1,
//       }
//     case 'newColor':
//       return { ...state, color: !state.color }
//     default:
//       throw new Error()
//   }
// }
// // -------------------------useReduce----------------------//
// const Button = ({ children, reverse }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     count: 3,
//   })
//   if (state.count === 0) {
//     alert('No more lifes')
//   }

//   // ----------------------------------------------------------//
//   const navigate = useNavigate()
//   const [direction, setDirection] = useState({
//     Score: 3,
//   })
//   if (direction.Score === 0) {
//     alert('you lose')
//     navigate('/playgame')
//   }

//   const handleCount = (item, action) => {
//     setDirection((prevState) => {
//       return {
//         ...prevState,
//         [item]: action === 'up' ? direction[item] + 1 : direction[item] - 1,
//       }
//     })
//   }

//   //---------------------------------------------------------//
//   // const [person, setPerson] = useState({
//   //   // name: 'Paul',
//   //   afterName: 'Gururu',
//   //   country: 'The Cave',
//   //   colors: 'purple',
//   // })
//   // const changePlayer = () => {
//   //   setPerson({
//   //     ...person,
//   //     afterName: 'Memmic',
//   //     country: 'Flaming Lake',
//   //   })
//   // }

//   //-----------------------------------------------------------//
//   const [person, setPerson] = useState('Gururu')
//   const changePlayer = () => {
//     if (person === 'Gururu') {
//       setPerson('Memmic')
//       alert('Player changed')
//     } else {
//       setPerson('Gururu')
//       alert('Player changed')
//     }
//   }
//   const [comunity, setComunity] = useState('FlamingLake')
//   const changeComunity = () => {
//     if (comunity === 'FlamingLake') {
//       setComunity('TheCave')
//       alert('Comunity changed')
//     } else {
//       setComunity('FlamingLake')
//       alert('Comunity changed')
//     }
//   }

//   // if (state.count === 0) {
//   //   alert('you lost')
//   //   Navigate('/playgame')
//   // }
//   // const direction = () => {
//   //   if (direction === 'Left') {
//   //     setDirection('Right')
//   //   } else {
//   //     setDirection('Left')
//   //   }
//   // }

//   return (
//     <div
//       className='button-container'
//       style={{
//         backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
//         color: state.color ? 'red' : 'yellow',
//       }}
//     >
//       <p
//         style={{
//           backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
//           color: state.color ? 'red' : 'yellow',
//         }}
//       ></p>
//       <h2 style={{ color: state.color ? 'black' : 'blue' }}>
//         {/* {person.country} */}
//       </h2>
//       <h2
//         style={{
//           backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
//           color: state.color ? 'cyan' : 'yellow',
//         }}
//       >
//         {person}
//         {children}
//       </h2>
//       {/* <h2>{person.afterName}</h2>
//       <h3>{person.name}</h3> */}
//       <button onClick={changePlayer}>Change Player</button>
//       <h2>
//         style=
//         {{
//           backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
//           color: state.color ? 'red' : 'green',
//         }}
//       </h2>
//       <h2>{comunity}</h2>
//       {state.count}
//       <button
//         disabled={state.count <= 0}
//         onClick={() => dispatch({ type: 'increment' })}
//       >
//         Left state.count
//       </button>
//       <button
//         disabled={state.count <= 0}
//         onClick={() => dispatch({ type: 'decrement' })}
//       >
//         Right state.count
//       </button>
//       <button onClick={changeComunity}>Run</button>
//       onClick={changePlayer}
//       style=
//       {{
//         backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
//         color: state.color ? 'black' : 'blue',
//       }}
//       <h2>color</h2>
//       <button
//         disabled={state.count <= 0}
//         onClick={changePlayer}
//         onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
//       >
//         Direction Right
//       </button>
//       <button
//         disabled={state.count <= 0}
//         onClick={changePlayer}
//         onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
//       >
//         Direction Left
//       </button>
//       <h2>Score</h2>
//       <h3>{direction.Score}</h3>
//       <button
//         disabled={direction.Score <= 0}
//         onClick={() => handleCount('Score', 'up')}
//         onMouseUp={() => dispatch({ type: 'newBackgroundColor' })}
//         onMouseDown={() => dispatch({ type: 'newColor' })}
//       >
//         Right direction.score
//       </button>
//       <button
//         disabled={direction.Score <= 0}
//         onClick={() => handleCount('Score', 'down')}
//         onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
//         onMouseUp={() => dispatch({ type: 'newColor' })}
//       >
//         Left direction.score
//       </button>
//     </div>
//   )
// }

// export default Button
