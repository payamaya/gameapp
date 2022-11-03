import '../styles/notfound.css'
import { Link } from 'react-router-dom'
import React from 'react'
const NotFound = () => {
  return (
   
      <div className='not-found'>
        <div>
          <h4>Page not found 404</h4>
        </div>
        {/* <p>This page cannot be found</p> */}
        <Link className='link-notfound' to='/'>
          back to home page
        </Link>
      </div>
  
  )
}
export default NotFound
