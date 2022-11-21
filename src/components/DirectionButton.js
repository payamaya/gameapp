import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'life':
      return { ...state, score: (state.score = 1) }
    case 'newColor':
      return { ...state, color: !state.color }
    default:
      throw new Error()
  }
}
const DirectionButton = ({ children, reverse }) => {
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
  return (
    <div
      className='button-container'
      style={{
        backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
        color: state.color ? 'red' : 'yellow',
      }}
    >
      <h1>Score</h1>
      <span>{direction.Score}</span>
      <button
        disabled={direction.Score <= 0 }
        onMouseDown={() => handleCount('Score', 'up')}
        onClick={() => dispatch({ type: 'newColor' })}
      >
        Left
      </button>
      <button
        disabled={direction.Score <= 0 }
        onMouseUp={() => handleCount('Score', 'down')}
        onClick={() => dispatch({ type: 'newColor' })}
      >
        Right
      </button>
    </div>
  )
}

export default DirectionButton
