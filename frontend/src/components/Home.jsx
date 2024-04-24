import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <>

    <div className='subScr'>
        <NavLink to="/register" >Subscribe Now </NavLink>
    </div>
      
    </>
  )
}

export default Home
