import {React , useState } from 'react'

const TableRow = ({order}) => {

  const {name , date , number , items , fulfilled , id} = order
  const [toggleFulfillment , onToggleFulfillment] = useState(fulfilled)

  function handleFulfillmentStatus(e) {
    
    const isFulfilled = toggleFulfillment ? false : true ;
    onToggleFulfillment((toggleFulfillment) => !toggleFulfillment)

    fetch(`http://localhost:3000/orders/${id}` , {
      method : "PATCH" ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify({fulfilled : isFulfilled})
    })
      .then(r => r.json())
      .then(console.log(toggleFulfillment))
  }

  const rowColor = toggleFulfillment ? "fulfilled" : "unfulfilled" ;

  const itemCount = Object.keys(items).length

  const splitdate = date.split("-")
  const newDate = `${splitdate[1]}/${splitdate[2]}/${splitdate[0]}`

  return (
    <tr className={rowColor}>
      <td>{number}</td>
      <td>{newDate}</td>
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