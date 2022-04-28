import React from "react";


const Orders = ({children}) => {
  return (
    <div className="my-5 mx-auto">
      <h1 className="font-60 text-center font-face-cl"><strong>MY ORDERS</strong></h1>
      {children}
    </div>
    
  )
}

export default Orders;