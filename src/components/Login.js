import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// const id = new URLSearchParams(window.location.search).get('id')
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // document.getElementById('getPassword').addEventListener('click', Login)
  const handleSubmit = (e) => {
    e.preventDefault()
    const person = { email, password }

    console.table(person)
    fetch(`http://localhost:3000/persons`)
      .then((response) => response.json())
      .then((e) => {
        let output = `<h2>Password</h2>`

        output += `<ul> 
      
      <li>${person.email}</li> 
      <li>${person.password}</li> 
      
      </ul>`

        document.getElementById('output').innerHTML = output
        navigate('/login')
      })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div id='output'></div>
        <div className='mb-3'>
          <label htmlFor='email'>Email address</label>
          <input
            required
            value={email}
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
            placeholder='Enter email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='userPassword'>Password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            id='userPassword'
            className='form-control'
            placeholder='Enter password'
          />
        </div>
        <div className='mb-3'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>
        <button type='submit' id='getPassword' className='submit-btn'>
          Login
        </button>
       
        <p className='forgot-password text-right'>
          Forgot
          <Link className='links' to='/signup'>
            password?
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
