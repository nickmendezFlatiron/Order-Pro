import {React} from 'react'
import { useParams , Link } from 'react-router-dom'
import {Button , Row , Container, Col , Card , ListGroup  , ListGroupItem } from 'react-bootstrap/'


const OrderNumberPage = ({orders}) => {
  
  // access the orderNumber key value from the useParams object to determine which order to display
  const params = useParams()
  if (orders.length === 0) return <h3>Loading...</h3>

  const order = orders.filter(order => order.number === parseInt(params.orderNumber))
  const selectedOrder = order[0]
  
  // splits date and reformats it to MM-DD-YYYY
  const splitDate = selectedOrder.date.split("-")
  const newDate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  
  const productList = selectedOrder.items.map(item => { return <ListGroupItem key={item}>{item}</ListGroupItem>})
  
  return (
      <Container className="mx-auto mt-5">  
        <Row>
          <Col sm={1}>
            <Button as={Link} to="/orders" exact variant="info" className="btn-lg text-wrap text-black-50">Back</Button>
          </Col>
          <Col sm={11} className="d-flex align-items-center">
            <h1 className="text-left">{selectedOrder.number}</h1>
            <h4 className="ms-3 text-secondary">{newDate}</h4>
            <h4 className="ms-3  text-secondary">{selectedOrder.fulfilled ? 'Fulfilled' : 'Unfulfilled'}</h4>
          </Col>
        </Row>
       <Container className="mt-5 d-inline-flex flex-row  justify-content-around">
          <Col sm={9}>
            <Card style={{ width: '30rem' }} >
              <Card.Header><strong>Items Purchased</strong></Card.Header>
              <ListGroup variant="flush">
                {productList}
              </ListGroup>
            </Card>
          </Col>
         
          <Col sm={3}>
          <Card >
            <Card.Header><strong>Customer Information</strong></Card.Header>
            <ListGroup>
              <ListGroupItem>{selectedOrder.name}</ListGroupItem>
              <ListGroupItem>{selectedOrder.email}</ListGroupItem>
            </ListGroup>
          </Card>
          </Col>
          
        </Container>
      </Container>
  )
}

export default OrderNumberPage