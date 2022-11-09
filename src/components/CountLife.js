import React, { useState, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/countlife.css'
import { Link } from 'react-router-dom'
const reducer = (state, action) => {
  switch (action.type) {
    case 'newBackgroundColor':
      return {
        ...state,
        backgroundColor: !state.backgroundColor,
        color: !state.color,
        text: !state.text,
        life: state.life - 1,
      }
    case 'newColor':
      return { ...state, color: !state.color }
    default:
      throw new Error()
  }
}

const CountLife = ({ children, reverse }) => {
  const [state, dispatch] = useReducer(reducer, {
    life: 3,
  })
  const navigate = useNavigate()
  // ----------------------------------------------------------//
  const [life, setLife] = useState('Gururu')
  const changeDiection = () => {
    if (life === 'Gururu') {
      setLife('Memmic')
      alert('direction changed')
    } else if (life === 'Memmic') {
      setLife('Gururu')
      navigate('/thecave')
      alert('direction changed')
    }
    if (state.count < 1) {
      navigate('/playgame')
      alert('YOU LOSE')
    }
  }

  const url = `http://localhost:6001/points`
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }
  useEffect(() => {
    getUsers()
  }, [''])
  return (
    <div className='countlife-container'>
      <h3
        style={{
          backgroundColor: state.backgroundColor ? 'lightpink' : 'lightgreen',
          color: state.color ? 'yellow' : 'blue',
        }}
      >
        {children}
        {state.life} <br />
        Life left
      </h3>
      <h1>
        {users.map((user) => {
          const { life, id } = user
          return <li key={id}>{life}</li>
        })}
      </h1>
      <Link to='/thecave'>
        <button
          disabled={state.life <= -1}
          onClick={changeDiection}
          onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
        >
          Direction Right
        </button>
      </Link>
      {life}
      <button
        disabled={state.life <= -1}
        onClick={changeDiection}
        onMouseDown={() => dispatch({ type: 'newBackgroundColor' })}
      >
        Direction Left
      </button>
    </div>
  )
}

export default CountLife
