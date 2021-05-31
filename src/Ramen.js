import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * Ramen
 * Props: None
 * State: None
 * 
 * VendingMachine --> Ramen
 */
function Ramen() {
  return (
    <div>
      <h1>Ramen</h1>
      <img src='https://image.shutterstock.com/image-vector/noodle-egg-chopstick-cartoon-vector-600w-1937571637.jpg' alt=''></img>
      <div>
        <NavLink exact to='/'>
          Return to Vending Machine!
      </NavLink>
      </div>
    </div>)
}

export default Ramen;