import React from 'react'

const TableRow = ({order}) => {

  const {name , date , number , items , fulfilled , id} = order

  

  const itemCount = Object.keys(items).length
  return (
    <tr>
      <td>{number}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{itemCount} Items</td>
      <td>
        <input type="checkbox" id={`${id}-check`} checked={fulfilled}></input> &nbsp;
        <label for={`${id}-check`}> {fulfilled ? "Fulfilled" : 'Unfulfilled'}</label>
      </td>
    </tr>
  )
}

export default TableRow