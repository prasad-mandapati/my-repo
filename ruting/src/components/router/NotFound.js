import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='--center-all'>
        <h1>Page Not Found</h1>
        <p>Looks like the page you ar looking for could not be found</p>
        <p>Back to <Link to="/" className='--color-primary'>Home Page</Link></p>
    </div>
  )
}

export default NotFound