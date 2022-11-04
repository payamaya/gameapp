import '../styles/card.css'
import { Link } from 'react-router-dom'

// import forestbild from '../images/forest.jpg'
// function Func() {
//   setTimeout(doSomething, 1000)
// }

const PlayGame = () => {
  return (
    <div className='containerCard'>
      <h1>Play Game</h1>

      <div className='card-container'>
        <div className='card'>
          <div className='card-back'></div>
          <div className='card-front'>
            <Link className='flaming-link' to='/memmic'>
              Enter Memmic
            </Link>
          </div>
        </div>
      </div>
      <div className='card-containerImage'>
        <div className='cardImage'>
          <div className='card-backImage'></div>
          <div className='card-frontImage'>
            <Link className='flaming-link' to='/thecave'>
              Enter The Cave
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlayGame
