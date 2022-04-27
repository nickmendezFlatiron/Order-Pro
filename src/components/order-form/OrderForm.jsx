import {React ,  useState} from "react";
import {Form , Container , Col , Row , Button} from 'react-bootstrap'

const OrderForm = ({orders , setOrders }) => {
  const [orderNumber , setOrderNumber] = useState(1)

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [date , setDate] = useState('')
  const [items , setItems] = useState('')
  
  function handleName(event){
    setName(event.target.value)
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handleDate(event) {
    setDate(event.target.value)
    console.log(event)
  }

  function handleItems(event) {
    setItems(event.target.value)

  }

  function handleSubmit(event){

    event.preventDefault()
    console.log('ive been submitted')
    const newOrder = {
      name : name ,
      email : email ,
      date : date ,
      number : orderNumber ,
      items : {item_1 : items} ,
      fulfilled : false
    }


    fetch(`http://localhost:3000/orders` ,{
      method : 'POST' ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify(newOrder)
    })
    .then(r => r.json())
    .then(() => {setOrders([...orders , newOrder ])})

    setName('')
    setEmail('')
    setDate('')
    setItems('')
  }
  return (
    <Container className="justify-content-around formbg">
      <div className="my-5 py-3">
        <h1 className="font-60 text-center font-face-cl bg-light bg-opacity-50 text-black" id="new-order"><strong>NEW ORDER</strong></h1>
      </div>
      <Form className="mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75" onSubmit={handleSubmit}>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." value={name} onChange={handleName}/>
            </Form.Group>
          </Col>
          <Col className="mt-2 ">
            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control type="email" placeholder="customername@email.com" value={email} onChange={handleEmail}/>
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
              <Form.Control placeholder={orderNumber} disabled/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col  className="mb-2">
            <Form.Group controlId="formOrderItems" className="justify-content-center">
                <Form.Label >Items Ordered</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Item here..." value={items} onChange={handleItems}/>
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