// import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `http://localhost:6001/persons`
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
          navigate('/memicpage')
          console.log(`hello ${data[i].name} welcome to the game`)
          alert(`hello ${data[i].username} welcome to the game`)

          localStorage.setItem("life", JSON.stringify(data[i].life));
          
        } else {
          console.log(`Inavlid ${email} adress or ${password} try again`)
          // alert(`invalid email ${email}`)
        }
      }
    }
    fetchData([])
    setEmail('')
    setPassword('')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        
              <label className='loginHead'> Enter Email</label>
              <input
                className='login-btn'
                required
                placeholder='@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

        <label className='loginPass'>Password</label>
              <input
                className='login-btn'
                required
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

        <div className='divLogin'>
        <label className='loginPassTwo'>Show Password</label>
        <input className='passCheck'  type='checkbox' required />


        </div>
        <div className='buttonLogin'>
        <button onClick={handleSubmit} className='loginBtn' type='submit'>
          Login ⬆
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login
