import React from 'react'
import "./Navbar.css"

import { NavLink } from 'react-router-dom';

const NavNar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavNar