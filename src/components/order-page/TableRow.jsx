import { React , useState } from 'react'
import  Link  from 'react-router-dom/Link'

const TableRow = ({order , setOrders, orders}) => {

  const {name , date , number , items , fulfilled , id} = order
  const [toggleFulfillment , onToggleFulfillment] = useState(fulfilled)

  function handleFulfillmentStatus() {
    
    const isFulfilled = toggleFulfillment ? false : true ;
    onToggleFulfillment((toggleFulfillment) => !toggleFulfillment)

    // Updates the fulfillment status of an order based on ID , and updates orders State
    fetch(`http://localhost:3000/orders/${id}` , {
      method : "PATCH" ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify({fulfilled : isFulfilled})
    })
      .then(r => r.json())
      .then(order.fulfilled = isFulfilled)
  }

  const rowColor = toggleFulfillment ? "fulfilled" : "unfulfilled" ;
  const itemCount = items.length

  // splits date and reformats it to MM/DD/YYYY
  const splitDate = date.split("-")
  const newDate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`

  return (
    <tr className={rowColor}>
      {/* generates an order specific link based on order number */}
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