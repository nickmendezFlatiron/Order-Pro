import React from 'react'
import {Container , Table} from 'react-bootstrap'
import TableRow from './TableRow'

const OrderTable = () => {
  const orders = [{
    name : "Johnie Boy",
    email : "john@email.com" ,
    date : "12/2/22" ,
    number : 1003 ,
    items : {
        item_1 : "shoes",
        item_2 : "t shirt" ,
        item_3 : "socks"
    } ,
    id : 1
  } ,
  {
    name : "Good Boy",
    email : "good@email.com" ,
    date : "12/22/22" ,
    number : 1004 ,
    items : {
        item_1 : "slippers",
        item_2 : "shorts" ,
        item_3 : "gym bag"
    } ,
    id : 2
  }]

  const tableRows = orders.map(order => {
   return <TableRow order={order} key={order.id} />
  }) 

  return (
    <Container>
      <Table bordered hover className="my-3">
        <thead>
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