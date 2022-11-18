import '../styles/playgame.css'
import { Link } from 'react-router-dom'


const PlayGame = ({ title }) => {
  return (
    <div className='divContainer'>
        <div className='containerCard'>
                    
                    <h1 className='headGame'>pLaY GaMe</h1>
                    <p className='playGame'>
                      Do you have the guts to choose between these two paths?<br></br>
                      What will it be, The Cave or Flaming Lake? <br></br>
                    </p>


                    <div className='divCardGame'>
                          <div className='card-container'>
                            <h3 className='cardHead'>The Cave</h3>
                            <div className='card'>
                              <div className='card-back'></div>
                              <div className='card-front'>
                                <Link className='thecave-link' to='/thecave'>
                                  Enter Cave
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className='card-container'>
                            <h3 className='cardHeadTwo'>Flaming Lake</h3>
                            <div className='card'>
                              <div className='card-backImage'></div>
                              <div className='card-frontImage'>   
                                <Link className='memic-link' to='/flaminglakepage'>
                                  Enter Lake
                                </Link>
                              </div>
                            </div>
                          </div>
                    </div>
      </div>
  </div>
    
  )
}
export default PlayGame
