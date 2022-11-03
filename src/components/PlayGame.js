import { Link } from 'react-router-dom'
import forestbild from '../images/forest.jpg'
import forest2 from '../images/forest2.jpg'
const PlayGame = () => {

  return (
    <div className='container'>
      <h1>Choose your Pth</h1>
      <button className='btn'>
        <figure>
          <img src={forestbild} width='100px' alt='' />
        </figure>
        Bild Flaming Lake
      </button>
      <button className='btn'>
        <figure>
          <img  src={forest2} width='120px' alt='' />
        </figure>
        <Link to='/thecave'>The Cave</Link>
      </button>
    </div>
  )
}
export default PlayGame
