import {React , useState } from 'react'

const TableRow = ({order}) => {

  const {name , date , number , items , fulfilled , id} = order
  const [toggleFulfillment , onToggleFulfillment] = useState(fulfilled)

  function handleFulfillmentStatus(e) {
    
  
    onToggleFulfillment(() => !toggleFulfillment)

    fetch(`http://localhost:3000/orders/${id}` , {
      method : "PATCH" ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify({fulfilled : toggleFulfillment})
    })
      .then(r => r.json())
  }

  const rowColor = fulfilled ? "fulfilled" : "unfulfilled" ;

  const itemCount = Object.keys(items).length
  return (
    <tr className={rowColor}>
      <td>{number}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{itemCount} Items</td>
      <td>
        <input type="checkbox" id={`${id}-check`} checked={toggleFulfillment} onChange={(e) => handleFulfillmentStatus(e)}></input> &nbsp;
        <label for={`${id}-check`}> {toggleFulfillment ? "Fulfilled" : 'Unfulfilled'}</label>
      </td>
    </tr>
  )
}

export default TableRow