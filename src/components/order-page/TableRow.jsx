import {React , useState } from 'react'

const TableRow = ({order}) => {

  const {name , date , number , items , fulfilled , id} = order
  const [toggleFulfillment , onToggleFulfillment] = useState(fulfilled)

  function handleFulfillmentStatus(e) {
    console.log(e)
    onToggleFulfillment(toggleFulfillment => !toggleFulfillment)
    debugger;
    fetch(`http://localhost:3000/orders/${id}` , {
      method : "PATCH" ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify({fulfilled : toggleFulfillment})
    }
      .then(r => r.json())
    ) 
    debugger;
  }

  

  const itemCount = Object.keys(items).length
  return (
    <tr>
      <td>{number}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{itemCount} Items</td>
      <td>
        <input type="checkbox" id={`${id}-check`} checked={fulfilled} onChange={(e) => handleFulfillmentStatus(e)}></input> &nbsp;
        <label for={`${id}-check`}> {fulfilled ? "Fulfilled" : 'Unfulfilled'}</label>
      </td>
    </tr>
  )
}

export default TableRow