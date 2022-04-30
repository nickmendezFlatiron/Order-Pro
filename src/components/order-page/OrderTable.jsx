import React from 'react'
import {Container , Table} from 'react-bootstrap'
import TableRow from './TableRow'



const OrderTable = ({orders , setOrders , search , filter}) => {
  
  
  const descendingNumbers = [...orders].sort((a , b) => {return b.number - a.number})
  const ascendingNumbers = [...orders].sort((a , b) => {return a.number - b.number})
  const abcSort = [...orders].sort((a , b) => a.name.localeCompare(b.name))
  const specialSort = filter === "descending" ? descendingNumbers : abcSort ;

  const defaultSort = filter === "default" ? ascendingNumbers : specialSort ;
  
  const searchFilter = defaultSort.filter( order => { 
    const orderString = order.items.join(',')
    
    
   return (order.name.toLowerCase().includes(search.toLowerCase())) || 
   orderString.toLowerCase().includes(search.toLowerCase())}
  ) 
  
  const tableRows = searchFilter.map(order => {
   return <TableRow orders={orders} order={order} key={order.id} setOrders={setOrders} />
  }) 

  return (
    <Container>
      <Table hover className="my-3 shadow " id="order-table">
        <thead className="mt-3 bg-opacity-25 bg-info">
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderTable