import { useState } from 'react'
import '../styles/garurunest.css'
import Gururu from '../images/gururunest.png'

const GaruruNest = () => {
  const [val, setVal] = useState('')
  const minimum = 1
  const maximum = 5
  function randomNumber() {
    const answer = Math.floor(Math.random() * (maximum - minimum + 1))
    console.log(answer)
    console.log(val)
    
    //    help through https://stackoverflow.com///
    if (parseInt(val) === answer) {
      alert('du Vann')
    } else {
      alert('Dead')
    }
    
  }
  
  const handleChange = (e) => {
    setVal(e.target.value)
  }

  return (
    <div className='garuruContainer'>
      <h1 className='garuruHead'>GarUrU NesT</h1>
      <div className='garuruDiv'>
        <div className='garuruLabel'>
          <label className='garuruLabel'>
            Guess a number between 1-5 to defeat Garuru!
          </label>
        </div>
        <div className='garuruInput'>
          <input
            value={val}
            onChange={handleChange}
            placeholder='skriv ett nummer'
          />
        </div>
        <div className='garuruButton'>
          <button className='buttonGaruru' onClick={randomNumber}>
            Get answer
          </button>
        </div>
        <div className='cardNest'>
          <div className='imgCard'>
            <img className='imgCard' src={Gururu} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GaruruNest
