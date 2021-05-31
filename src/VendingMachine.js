import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/soju'>
          <Soju />
        </Route>
        <Route exact path='/fried-chicken'>
          <FriedChicken />
        </Route>
        <Route exact path='/ramen'>
          <Ramen />
        </Route>
      </BrowserRouter>
    </div>)
}

export default VendingMachine