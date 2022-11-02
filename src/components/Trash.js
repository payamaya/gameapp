// import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useState, useEffect } from 'react'
// import Records from '../database/db.json'
// import { useNavigate } from 'react-router-dom'
// const id = new URLSearchParams(window.location.search).get('id')
// const Login = () => {

const initProfile = {
  username: null,
  name: null,
  email: null,
  password: null,
}

const Trash = () => {
  const [person, setPerson] = useState(initProfile)

  const getPerson = async () => {
    const response = await fetch('http://localhost:3000/persons?_sort=password')

    const data = await response.json()

    setPerson({
      username: data.username,
      name: data.name,
      email: data.email,
      password: data.password,
    })
  }

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <div>
      <h1>Fetch data with useEffect</h1>
      {/* <h3>{`Github user name: ${profile.username}`}</h3> */}
      <h3>{`Name: ${person.name}`}</h3>
      <h3>{`UserName: ${person.username}`}</h3>
      <h3>{`Email: ${person.email}`}</h3>
      <h3>{`Password: ${person.password}`}</h3>
      {/* {Records.map((record) => {
        return <div className='box' key={record.id}>{record.name}</div>
      })} */}
    </div>
  )
}

export default Trash
