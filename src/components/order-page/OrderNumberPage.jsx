import {React , useEffect , useState} from 'react'
import { useParams , Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const OrderNumberPage = ({orders}) => {

  const params= useParams()
  const order = orders.filter(order => order.number === parseInt(params.orderNumber))
  console.log("orders ", order[0].number)
  
  const [orderInfo , setOrderInfo] = useState(order)


    
  
  return (
    <div>
       <Button as={Link} to="/orders" exact variant="info" className="btn-lg text-wrap text-black-50">Back</Button>
       <p>{orderInfo[0].number}</p>
    </div>
  )
}

export default OrderNumberPage