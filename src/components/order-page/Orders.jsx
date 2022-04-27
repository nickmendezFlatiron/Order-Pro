import React from "react";
import SearchBar from "./SearchBar";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div className="my-3 mx-auto">
      <h1 className="font-60 text-center">MY ORDERS</h1>
      <SearchBar />  
      <OrderTable />
    </div>
    
  )
}

export default Orders;