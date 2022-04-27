import {React , useState , useEffect , Fragment } from "react";
import { Route , Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Orders from "./order-page/Orders";
import OrderForm from "./order-form/OrderForm";
import HomePage from "./home-page/HomePage";

import logo from '../assets/logo.png';
import '../fonts/Cocogoose-Light.ttf'
import '../fonts/Cocogoose-Ultralight.ttf'


const App = () => {

  const [orders , setOrders] = useState([])
  const url = 'http://localhost:3000/orders'

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(orders => setOrders(orders))
  }, [])

  return (
        <Fragment>
          <Navigation logo={logo}/>
          <Switch>
            <Route exact path="/orders">
              <Orders orders={orders} />
            </Route>
            <Route exact path="/create-order">
              <OrderForm />
            </Route>
            <Route exact path="/">
              <HomePage logo={logo}/>
            </Route>
          </Switch>
        </Fragment>
  );
}

export default App;
