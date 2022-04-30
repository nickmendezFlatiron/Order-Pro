import {React , useState , useEffect , Fragment } from "react";
import { Route , Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Orders from "./order-page/Orders";
import OrderForm from "./order-form/OrderForm";
import HomePage from "./home-page/HomePage";
import OrderTable from "./order-page/OrderTable";
import SearchBar from "./order-page/SearchBar";
import OrderNumberPage from "./order-page/OrderNumberPage";

import logo from '../assets/logo.png';
import '../fonts/Cocogoose-Light.ttf'
import '../fonts/Cocogoose-Ultralight.ttf'



const App = () => {

  const [orders , setOrders] = useState([])
  const url = 'http://localhost:3000/orders'
  

  const [search , setSearch] = useState('')
  const [filter , setFilter] = useState('default')

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
              {/* use children prop to reduce prop drilling */}
              <Orders>
                <SearchBar orders={orders} setSearch={setSearch} setFilter={setFilter} search={search}/>  
                <OrderTable orders={orders} setOrders={setOrders} url={url} search={search} filter={filter}/>
              </Orders>
            </Route>
            <Route exact path="/create-order">
              <OrderForm orders={orders} setOrders={setOrders} url={url}/>
            </Route>
            <Route exact path="/">
              <HomePage logo={logo}/>
            </Route>
            <Route exact path="/orders/:orderNumber" >
              <OrderNumberPage orders={orders}/>
            </Route>
          </Switch>
        </Fragment>
  );
}

export default App;
