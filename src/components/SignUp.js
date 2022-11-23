import '../styles/signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [username, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [life, setLife] = useState(3)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { name, username, email, password, life }

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
    <div className='containerSign'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <div className='textSign'>
            <label>First name </label>
          </div>
          <div className='inputDiv'>
            <input
              className='login-btn'
              type='text'
              required
              placeholder='First name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-3'>
          <div className='textSign'>
            <label>Last name</label>
          </div>
          <div className='inputDiv'>
            <input
              className='login-btn'
              type='text'
              required
              placeholder='Last name'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-3'>
          <div className='textSign'>
            <label>Email</label>
          </div>
          <div className='inputDiv'>
            <input
              className='login-btn'
              required
              placeholder='@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />
          </div>
        </div>
        <div className='mb-3'>
          <div className='textSign'>
            <label>Password</label>
          </div>
          <div className='inputDiv'>
            <input
              className='login-btn'
              required
              value={password}
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
          </div>
        </div>
        <div className='btnLogin'>
          <button className='btnLogin' onSubmit={handleSubmit}>
            Sign Up ⬆
          </button>
        </div>
      </form>
    </div>
  )
}
export default SignUp
