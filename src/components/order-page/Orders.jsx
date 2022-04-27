import React from "react";
import SearchBar from "./SearchBar";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div className="my-5 mx-auto">
      <h1 className="font-60 text-center font-face-cl">MY ORDERS</h1>
      <SearchBar />  
      <OrderTable />
    </div>
    
  )
}

export default Orders;