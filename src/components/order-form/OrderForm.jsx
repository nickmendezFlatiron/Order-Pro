import { React ,  useEffect,  useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const OrderForm = ({orders , setOrders }) => {
  
  // set State for each form input
  const [orderNumber , setOrderNumber] = useState(0)
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [date , setDate] = useState('')
  const [items , setItems] = useState('')

  
  function handleName(event){
    const characters = event.target.value
    if(characters.length <= 10){
      setName(event.target.value)
    }
  }

  function handleEmail(event){
    
    const characters = event.target.value
    if(characters.length <= 20){
      setEmail(event.target.value)
    }
  }

  function handleDate(event) {
  setDate(event.target.value)
  }

  function handleItems(event) {  
    const itemArray = event.target.value.split(',')
    setItems(itemArray)
  }

  function handleSubmit(event){
    event.preventDefault()

    const newOrder = {
    name : name ,
    email : email ,
    date : date ,
    number : orderNumber ,
    items : items ,
    fulfilled : false
    }
    
    fetch(`http://localhost:3000/orders` ,{
      method : 'POST' ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify(newOrder)
    })
    .then(r => r.json())
    .then((order) => {setOrders([...orders , order ])})

    setName('')
    setEmail('')
    setDate('')
    setItems('')
    setOrderNumber(orderNumber => orderNumber + 1)

  }

  // set the order Number for the next order once the orders prop is set after the API call in parent app.js useEffect
  useEffect(()=>{
    const descendingNumbers = [...orders].sort((a , b) => {return b.number - a.number})
    if(orders.length !== 0) {
      setOrderNumber(descendingNumbers[0].number + 1)
    }
  },[orders])

  return (
    // require each input from user
    <Container className="justify-content-around formbg">
      <div className="my-5 py-3">
        <h1 className="font-60 text-center font-face-cl bg-info bg-opacity-75 text-dark-50" id="new-order"><strong>NEW ORDER</strong></h1>
      </div>
      <Form className="padding mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75" onSubmit={handleSubmit}>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." value={name} onChange={handleName} required/>
              <Form.Text>{`${10 - name.length} characters remaining`}</Form.Text>
            </Form.Group>
          </Col>
          <Col className="mt-2 ">
            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control type="email" placeholder="customername@email.com" value={email} onChange={handleEmail} required/>
              <Form.Text>{`${20 - email.length} characters remaining`}</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formOrderDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={handleDate}/>
              </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formOrderNumber">
              <Form.Label>Order Number</Form.Label>
              <Form.Control placeholder={orderNumber} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col  className="mb-2">
            <Form.Group controlId="formOrderItems" className="justify-content-center">
                <Form.Label >Items Ordered</Form.Label>
                <Form.Control as="textarea" placeholder="Separate items with commas ," value={items} onChange={handleItems} required/>
              </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center my-3">
         <Button variant="info" type="submit" className="mb-3 text-secondary" >Create Order</Button>
        </div>
      </Form>
    </Container>
  )
}

export default OrderForm;