import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'


/**
 * Home
 * Props: None
 * State: None
 * 
 * VendingMachine --> Home
 */
function Home() {
  return (
    <div>
      <h1>Vending Machine</h1>
        <NavLink class='home-nav' exact to='/soju'>
          Soju
      </NavLink>
        <NavLink class='home-nav' exact to='/fried-chicken'>
          Fried Chicken
      </NavLink>
        <NavLink class='home-nav' exact to='/ramen'>
          Ramen
      </NavLink>
      <img src='https://image.shutterstock.com/image-vector/vending-machine-snacks-drinks-flat-600w-647319223.jpg' alt=''></img>
    </div>

  )
}

export default Home;