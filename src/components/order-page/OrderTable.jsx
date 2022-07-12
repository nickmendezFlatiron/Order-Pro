import React from 'react'
import Container  from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'



const OrderTable = ({orders , setOrders , search , filter}) => {
  
  // Sorting methods
  const descendingNumbers = [...orders].sort((a , b) => {return b.number - a.number})
  const ascendingNumbers = [...orders].sort((a , b) => {return a.number - b.number})
  const abcSort = [...orders].sort((a , b) => a.name.localeCompare(b.name))

  //Ternary expressiong to determine how to sort , based on Filter selected
  const specialSort = filter === "descending" ? descendingNumbers : abcSort ;
  const defaultSort = filter === "default" ? ascendingNumbers : specialSort ;
  
  // Filter orders by search value included in order date , order number , customer names , or items purchased
  const searchFilter = defaultSort.filter( order => { 
    // returns a string of the order items
    const orderString = order.items.join(',')
   return  order.number.toString().includes(search) || order.date.includes(search) || (order.name.toLowerCase().includes(search.toLowerCase())) || 
   orderString.toLowerCase().includes(search.toLowerCase())}
  ) 
  
  const tableRows = searchFilter.map(order => {
   return <TableRow orders={orders} order={order} key={order.id} setOrders={setOrders} />
  }) 

  return (
    <Container>
      <Table hover className="my-3 shadow padding" id="order-table">
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