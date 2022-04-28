import React from 'react'
import {Container , Table} from 'react-bootstrap'
import TableRow from './TableRow'

const OrderTable = ({orders , setOrders , search , filter}) => {
 

  const numberSort = [...orders].sort((a , b) => {return b.number - a.number})
  const abcSort = [...orders].sort((a , b) => a.name.localeCompare(b.name))
  const specialSort = filter === "descending" ? numberSort : abcSort ;

  const defaultSort = filter === "default" ? orders : specialSort ;
  
  const searchFilter = defaultSort.filter(order => order.name.includes(search) || order.items.item_1.includes(search) ) 

  const tableRows = searchFilter.map(order => {
   return <TableRow order={order} key={order.id} setOrders={setOrders} />
  }) 

  return (
    <Container>
      <Table hover className="my-3 bordered shadow-sm">
        <thead className="mt-3">
          <th>Order #</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Status</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderTable