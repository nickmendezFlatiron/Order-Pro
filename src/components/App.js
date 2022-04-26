import React from "react";
import { Route , Switch } from "react-router-dom";


import Navigation from "./Navigation";
import Orders from "./Orders";
import OrderForm from "./OrderForm";
import HomePage from "./HomePage";


const App = () => {
  return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/create-order">
            <OrderForm />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </React.Fragment>
  );
}

export default App;
