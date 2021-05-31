import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

/**
 * NavBar
 * Props: None
 * State: None
 * 
 * App --> NavBar
 */
function NavBar() {
  return (
    <div class='navbar navbar-dark bg-dark NavBar'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/soju'>
        Soju
      </NavLink>

      <NavLink exact to='/fried-chicken'>
        Fried Chicken
      </NavLink>

      <NavLink exact to='/ramen'>
        Ramen
        </NavLink>
    </div>)
}

export default NavBar;
