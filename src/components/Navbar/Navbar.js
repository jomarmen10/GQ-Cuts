import React from 'react';
import { NavLink } from 'react-router-dom'




const Navbar = props => {
  return (
    <div>
      <h1>GQ Cuts</h1>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/schedule'}>schedule</NavLink>
      <NavLink to={'/pricing'}>pricing</NavLink>
      <NavLink to={'/gallery'}>gallery</NavLink>
      <NavLink to={'/barbers'}>barbers</NavLink>
    </div>
  )
}

export default Navbar;
