import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink activeClassName="active" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/">
          Projects
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/">
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar