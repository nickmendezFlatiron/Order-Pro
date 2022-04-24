import React from "react";
import { Route , Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation";
import Orders from "./Orders";
import OrderForm from "./OrderForm";
import HomePage from "./HomePage";


const App = () => {
  return (
      <Container>
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
      </Container>
  );
}

export default App;
