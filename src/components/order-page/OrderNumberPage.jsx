import React from 'react'
import Button from 'react-bootstrap'

const OrderNumberPage = ({orders}) => {
  return (
    <div>
       <Button as={Link} to="/orders" exact variant="info" className="btn-lg text-wrap text-black-50">Back</Button>
       <p>
         {order.name} , {order.number}
       </p>
    </div>
  )
}

export default OrderNumberPage