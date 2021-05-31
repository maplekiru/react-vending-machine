import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * FriedChicken
 * Props: None
 * State: None
 * 
 * VendingMachine --> FriedChicken
 */
function FriedChicken() {
  return (
    <div>
      <h1>Fried Chicken</h1>
      <img src='https://image.shutterstock.com/image-vector/spicy-korean-fried-chicken-meal-600w-1744017266.jpg' alt=''></img>
    <div>
      <NavLink exact to='/'>
        Return to Vending Machine!
      </NavLink>
      </div>
    </div>)
}

export default FriedChicken;