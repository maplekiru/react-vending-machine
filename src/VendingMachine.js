import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Soju from './Soju';
import FriedChicken from './FriedChicken';
import Ramen from './Ramen';

/**
 * Vending Machine
 * Props: None
 * State: None
 * 
 * App --> VendingMachine --> {Soju, FriedChicken, Ramen}
 */

// move Browser Router up to App.js
function VendingMachine() {
  return (
    <div>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/soju'>
          <Soju />
        </Route>
        <Route exact path='/fried-chicken'>
          <FriedChicken />
        </Route>
        <Route exact path='/ramen'>
          <Ramen />
        </Route>
    </div>)
}

export default VendingMachine