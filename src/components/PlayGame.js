import '../styles/card.css'
import { Link } from 'react-router-dom'

// import forestbild from '../images/forest.jpg'

const PlayGame = () => {
  return (
    <div className='containerCard'>
      <h1>Play Game</h1>
      <div className='card-container'>
        <div className='card'>
          <div className='card-back'></div>
          <div className='card-front'></div>
        </div>
      </div>
      <div className='card-containerImage'>
        <div className='cardImage'>
          <div className='card-backImage'></div>
          <div className='card-frontImage'></div>
        </div>
      </div>
    </div>
  )
}
export default PlayGame
