import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Soju
 * Props: None
 * State: None
 * 
 * VendingMachine --> Soju
 */
function Soju() {
  return (
    <div>
      <h1>Soju</h1>
      <img src='https://image.shutterstock.com/image-vector/korean-sake-soju-illustration-vector-600w-1442920118.jpg' alt=''></img>
      <div>
        <NavLink exact to='/'>
          Return to Vending Machine!
      </NavLink>
      </div>
    </div>)
}

export default Soju;