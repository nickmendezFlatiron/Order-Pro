import React from "react";
import { Route , Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Orders from "./order-page/Orders";
import OrderForm from "./order-form/OrderForm";
import HomePage from "./home-page/HomePage";

import logo from '../assets/logo.png';
import '../fonts/Cocogoose-Light.ttf'
import '../fonts/Cocogoose-Ultralight.ttf'


const App = () => {
  return (
      <React.Fragment>
        <Navigation logo={logo}/>
        <Switch>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/create-order">
            <OrderForm />
          </Route>
          <Route exact path="/">
            <HomePage logo={logo}/>
          </Route>
        </Switch>
      </React.Fragment>
  );
}

export default App;
