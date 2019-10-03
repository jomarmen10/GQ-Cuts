import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavRow } from '../Style/Style';



const Navbar = props => {
  return (
    <NavRow>
      <div className="container">
        <h1 className='left'>GQ Cuts</h1>
        <div className='right'>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/schedule'}>schedule</NavLink>
          <NavLink to={'/pricing'}>pricing</NavLink>
          <NavLink to={'/gallery'}>gallery</NavLink>
          <NavLink to={'/barbers'}>barbers</NavLink>
        </div>
      </div>
    </NavRow>
  )
}

export default Navbar;
