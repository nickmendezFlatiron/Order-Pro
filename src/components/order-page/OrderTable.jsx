import React from 'react'
import {Container , Table} from 'react-bootstrap'
import TableRow from './TableRow'

const OrderTable = ({orders , setOrders}) => {
 

  const tableRows = orders.map(order => {
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
          <th>Fulfillment</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderTable