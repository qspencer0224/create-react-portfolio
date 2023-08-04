import React from 'react'
import { Link } from 'react-router-dom'

function Nav_UI() {
  return (
    <div>
      <div className='menuItems'>
        <Link to="/">
        <p>Home</p>
        </Link>

        <Link to="/aboutme">
        <p>About Me</p>
        </Link>

        <Link to="/portfolio">
        <p>Portfolio</p>
        </Link>

        <Link to="/community">
        <p>Community</p>
        </Link>


        <Link to="/contact">
        <p>Contact</p>
        </Link>        

      </div>
    </div>
  )
}

export default Nav_UI
