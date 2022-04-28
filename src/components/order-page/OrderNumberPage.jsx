import {React } from 'react'
import { useParams , Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const OrderNumberPage = ({order}) => {
  const params= useParams()

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