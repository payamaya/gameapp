import '../styles/card.css'
import { Link } from 'react-router-dom'
import cave from '../images/cavecard.png'

// import forestbild from '../images/forest.jpg'

const PlayGame = () => {
  return (

    <div className='divContainer'>
    <div className='containerCard'>
      <h1 className='headGame'>Play Game</h1>
      
      <div className='card-container'>
        <h3 className='cardHead'>Go to Cave</h3>
        <div className='card'>
          <div className='card-back'>
           
          </div>
          <div className='card-front'>
            <Link className='thecave-link' to='/thecave'>
              Enter Cave
            </Link>
          </div>
        </div>
      </div>

      <div className='card-container'>
        <h3 className='cardHead'>Go to Memic Forest</h3>
        <div className='card'>
          <div className='card-backImage'></div>
          <div className='card-frontImage'>
             <Link className='thecave-link' to='/memicpage'>
              Enter Forest
            </Link>
          </div>
          
        </div>
        </div>
      </div>
      </div>
    
  )
}
export default PlayGame
