import React from 'react'

const TableRow = ({order}) => {

  const {name , date , number , items} = order

  const itemCount = Object.keys(items).length
  return (
    <tr>
      <td>{number}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{itemCount} Items</td>
      <td>
        <input type="checkbox">
        </input>
      </td>
    </tr>
  )
}

export default TableRow