import '../styles/signup.css'
// import { Link } from 'react-router-dom'
// <Link to='/login'>sign in?</Link>
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { name, username, email, password }

    console.log(user)
    fetch('http://localhost:6001/persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log('new user added')
        navigate('/login')
        return res.json()
      })
      .then((data) => console.table(data))
      .catch((error) => console.log('Erorr'))
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className='mb-3'>
          <label>First name </label>
          <input
            className='login-btn'
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            // className='form-control'
            // placeholder='First name'
          />
        </div>
        <div className='mb-3'>
          <label>Last name</label>
          <input
            className='login-btn'
            type='text'
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            // className='form-control'
            // placeholder='Last name'
          />
        </div>
        <div className='mb-3'>
          <label>Email address</label>
          <input
            className='login-btn'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            // className='form-control'
            // placeholder='Enter email'
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            className='login-btn'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            // className='form-control'
            // placeholder='Enter password'
          />
        </div>
        <div className='d-grid'>
          <button
            className='login-btn'
            // onClick={redirect}
            // to='/login'
            // type='button'
            onSubmit={handleSubmit}
            // className='btn btn-primary'
          >
            Sign Up
          </button>
        </div>
        {/* <p className='forgot-password text-right'>
          Already registered <Link to='/login'>sign in?</Link>
        </p> */}
      </form>
    </div>
  )
}
export default SignUp
