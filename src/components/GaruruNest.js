
import { useState, useEffect } from 'react'



const GaruruNest = () => {
  const [Val, setVal] = useState('')

  const minimum = 1
  const maximum = 5

  function randomNumber() {
    const answer = Math.floor(Math.random() * (maximum - minimum + 1))
    console.log(answer)
    console.log(Val)

    //    help through https://stackoverflow.com
    if (parseInt(Val) === answer) {
      alert('du Vann')
    } else {
      alert('Dead')
    }
  }

  const handleChange = (e) => {
    setVal(e.target.value)
  }


  return (
    <div>
      <h2>Garuru</h2>
      <label>
        {' '}
        Gissa rätt nummer för att slå Garuru
        <br />
        <input
          value={Val}
          onChange={handleChange}
          placeholder='skriv ett nummer'
        />
      </label>

      <button onClick={randomNumber}>Get answer</button>

    {/* return (
    
    <div className="garuruContainer">
        <h1>Garuru</h1>
        <label className="garuruLabel"> Gissa ett nummer mellan 1-5 för att slå Garuru
            <br/>
        <input value={Val} onChange={handleChange} placeholder="skriv ett nummer" />
        
        </label>

        <button onClick={randomNumber}>Get answer</button> */}

    </div>
  )
}

export default GaruruNest
