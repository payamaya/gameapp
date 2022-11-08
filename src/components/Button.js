import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router'
import '../styles/button.css'
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'life':
      return { ...state, score: (state.score = 1) }
    case 'newBackgroundColor':
      return {
        ...state,
        backgroundColor: !state.backgroundColor,
        color: !state.color,
        text: !state.text,
        count: state.count - 1,
      }
    case 'newColor':
      return { ...state, color: !state.color }
    default:
      throw new Error()
  }
}
// -------------------------useReduce----------------------//
const Button = ({ children, reverse }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: 3,
  })

  // ----------------------------------------------------------//

  const [direction, setDirection] = useState({
    Score: 3,
  })

  const handleCount = (item, action) => {
    setDirection((prevState) => {
      return {
        ...prevState,
        [item]: action === 'up' ? direction[item] + 1 : direction[item] - 1,
      }
    })
  }

  //---------------------------------------------------------//
  // const [person, setPerson] = useState({
  //   // name: 'Paul',
  //   afterName: 'Gururu',
  //   country: 'The Cave',
  //   colors: 'purple',
  // })
  // const changePlayer = () => {
  //   setPerson({
  //     ...person,
  //     afterName: 'Memmic',
  //     country: 'Flaming Lake',
  //   })
  // }

  //-----------------------------------------------------------//
  const [person, setPerson] = useState('Gururu')
  const changePlayer = () => {
    if (person === 'Gururu') {
      setPerson('Memmic')
      alert('Player changed')
    } else {
      setPerson('Gururu')
      alert('Player changed')
    }
  }
  const [comunity, setComunity] = useState('FlamingLake')
  const changeComunity = () => {
    if (comunity === 'FlamingLake') {
      setComunity('TheCave')
      alert('Comunity changed')
    } else {
      setComunity('FlamingLake')
      alert('Comunity changed')
    }
  }

  // if (state.count === 0) {
  //   alert('you lost')
  //   Navigate('/playgame')
  // }
  // const direction = () => {
  //   if (direction === 'Left') {
  //     setDirection('Right')
  //   } else {
  //     setDirection('Left')
  //   }
  // }

  return (
    <div
      className='button-container'
      style={{
        backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
        color: state.color ? 'red' : 'yellow',
      }}
    >
      {children}
      <p
        style={{
          backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
          color: state.color ? 'red' : 'yellow',
        }}
      ></p>
      <h1 style={{ color: state.color ? 'black' : 'blue' }}>
        {person.country}
      </h1>
      <h1
        style={{
          backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
          color: state.color ? 'cyan' : 'yellow',
        }}
      >
        {person}
      </h1>
      <h2>{person.afterName}</h2>
      <h3>{person.name}</h3>
      <button onClick={changePlayer}>Change Player</button>
      <h1
        style={{
          backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
          color: state.color ? 'red' : 'green',
        }}
      >
        {comunity}
      </h1>
      {state.count}
      <button
        disabled={state.count >= 3}
        onClick={() => dispatch({ type: 'increment' })}
      >
        Left
      </button>
      <button
        disabled={state.count <= 0}
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Right
      </button>

      <button onClick={changeComunity}>Run</button>

      <h1
        onClick={changePlayer}
        style={{
          backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
          color: state.color ? 'black' : 'blue',
        }}
      >
        color
      </h1>
      <button
        disabled={state.count <= 0}
        onClick={changePlayer}
        onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
        onMouseUp={changeComunity}
      >
        Direction Right
      </button>
      <Link to={'/login'}>
        <button
          disabled={state.count <= 0}
          onClick={changePlayer}
          onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
          onMouseUp={changeComunity}
        >
          Direction Left
        </button>
      </Link>

      <h1>Score</h1>
      <span>{direction.Score}</span>
      <button
        disabled={direction.Score >= 3}
        onMouseDown={() => handleCount('Score', 'up')}
        onClick={() => dispatch({ type: 'newColor' })}
      >
        Left
      </button>
      <button
        disabled={direction.Score <= 0}
        onMouseUp={() => handleCount('Score', 'down')}
        onClick={() => dispatch({ type: 'newColor' })}
      >
        Right
      </button>
    </div>
  )
}

export default Button
