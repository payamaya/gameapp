// import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    // const user = { email, password }
    const url = `http://localhost:6001/persons`
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()

      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
          navigate('/playgame')
          console.log(`hello ${data[i].name} welcome to the game`)
          return alert(`hello ${data[i].username} welcome to the game`)
        } else {
          console.log(`invalid email ${email}`)
          // alert(`invalid email ${email}`)
          // break
        }
      }
      // break
      // console.log(data)

      // try {
      //   const response = await fetch(url)
      //   const json = await response.json()
      //   console.table(json)
      // } catch (error) {
      //   console.log('error', error)
      // }
    }
    fetchData([])
    setEmail('')
    setPassword('')
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          className='login-btn'
          required
          placeholder='@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='login-btn'
          required
          placeholder='password'
          // type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Show Password</label>
        <input type='checkbox' required />
        <button onClick={handleSubmit} className='login-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
