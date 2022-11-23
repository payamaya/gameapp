import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const ButtonLife = ({ para, title, link }) => {
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const navigate = useNavigate()
  // Set Disable on the next two choice if u are right you disable what the road u passed.

  const [userLife, setUserLife] = useState(null)

  const getLifeFromLocalstorage = () => {
    const life = JSON.parse(localStorage.getItem('life'))
    if (life) {
      setUserLife(life)
    }
  }
  useEffect(() => {
    getLifeFromLocalstorage()
  }, [])

  useEffect(() => {
    window.localStorage.setItem('life', userLife)
    if (localStorage.life < 1) {
      navigate('/startpage')
    }
  }, [userLife])

  const handleLeft = () => {
    setLeft(true)
    alert(`Rätt val Du har ${userLife} liv kvar`)
  }
  const handleRight = () => {
    setRight(true)
    alert(`Du har ${userLife - 1} liv kvar`)
    setUserLife(userLife - 1)
    if (setUserLife > 1) {
      alert(`YOU LOSE ${userLife}`)
      navigate('/playgame')
    }
    console.log(userLife - 1)
  }
  return (
    <div>
      <h1 className='userlife'>{userLife}</h1>
      <div className='FlamingLake-item'>
        <div className='buttonFlameDiv'>
          <div className='btnFlame'>
            <Link className='links' to={link}>
              <button
                className='flameBtn'
                onClick={handleLeft}
                disabled={userLife <= 0}
              >
                Left
              </button>
            </Link>
            <button
              className='flameBtn'
              onClick={handleRight}
              disabled={userLife <= 0}
            >
              Right
            </button>
          </div>
        </div>
      </div>
      <div className='fire'>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
        <div className='particle'></div>
      </div>
    </div>
  )
}

export default ButtonLife
