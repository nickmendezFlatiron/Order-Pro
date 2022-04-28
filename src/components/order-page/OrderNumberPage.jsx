import {React} from 'react'
import { useParams , Link } from 'react-router-dom'
import {Button , Row , Container, Col , Card , ListGroup  , ListGroupItem } from 'react-bootstrap/'


const OrderNumberPage = ({orders}) => {

  const params= useParams()

  const order = orders.filter(order => order.number === parseInt(params.orderNumber))
  const orderInfo = order[0]
  

  const splitdate = orderInfo.date.split("-")
  const newDate = `${splitdate[1]}/${splitdate[2]}/${splitdate[0]}`
  
  const productList = orderInfo.items.map(item => { return <ListGroupItem key={item}>{item}</ListGroupItem>})
  
  return (
      <Container className="mx-auto mt-5">
        <Row>
          <Col sm={1}>
            <Button as={Link} to="/orders" exact variant="info" className="btn-lg text-wrap text-black-50">Back</Button>
          </Col>
          <Col sm={11} className="d-flex align-items-center">
            <h1 className="text-left">{orderInfo.number}</h1>
            <h4 className="ms-3 text-secondary">{newDate}</h4>
            <h4 className="ms-3  text-secondary">{orderInfo.fulfilled ? 'Fulfilled' : 'Unfulfilled'}</h4>
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
              <ListGroupItem>{orderInfo.name}</ListGroupItem>
              <ListGroupItem>{orderInfo.email}</ListGroupItem>
            </ListGroup>
          </Card>
          </Col>
          
        </Container>
      </Container>
  )
}

export default OrderNumberPage