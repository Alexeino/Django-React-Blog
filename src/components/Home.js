import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to The Django Blog!</h1>
            <p className="lead">We make all kinds of awesome blog about various topics.</p>
            <hr className="my-4" />
            <p>Click the button below to check out our awesome blog articles.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blogs</Link>
        </div>
    </div>  )
}

export default Home