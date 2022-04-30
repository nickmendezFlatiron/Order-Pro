import { React , useState } from 'react'
import  Link  from 'react-router-dom/Link'

const TableRow = ({order , setOrders, orders}) => {

  const {name , date , number , items , fulfilled , id} = order
  const [toggleFulfillment , onToggleFulfillment] = useState(fulfilled)

  function handleFulfillmentStatus() {
    
    const isFulfilled = toggleFulfillment ? false : true ;
    onToggleFulfillment((toggleFulfillment) => !toggleFulfillment)

    fetch(`http://localhost:3000/orders/${id}` , {
      method : "PATCH" ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify({fulfilled : isFulfilled})
    })
      .then(r => r.json())
      .then(updatedOrder => {
        const updatedArray = orders.filter(order => order.id !== updatedOrder.id )
        updatedArray.push(updatedOrder)
        setOrders(updatedArray)
        }
      )
  }

  const rowColor = toggleFulfillment ? "fulfilled" : "unfulfilled" ;

  const itemCount = items.length

  const splitdate = date.split("-")
  const newDate = `${splitdate[1]}/${splitdate[2]}/${splitdate[0]}`

  return (
    <tr className={rowColor}>
      <td><Link to={`/orders/${number}`}>{number}</Link></td>
      <td>{newDate}</td>
      <td>{name}</td>
      <td>{itemCount} Items</td>
      <td>
        <input type="checkbox" id={`${id}-check`} checked={toggleFulfillment} onChange={() => handleFulfillmentStatus()}></input> &nbsp;
        <label > {toggleFulfillment ? "Fulfilled" : 'Unfulfilled'}</label>
      </td>
    </tr>
  )
}

export default TableRow