import React from 'react';
import { NavLink } from 'react-router-dom'




const Navbar = props => {
  return (
    <div>
      <h1>GQ Cuts</h1>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/'}>Nab 2</NavLink>
      <NavLink to={'/'}>Nav 3</NavLink>
      <NavLink to={'/'}>Nav 4</NavLink>
    </div>
  )
}

export default Navbar;
