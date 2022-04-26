import React from "react";
import {Form , Container , Col , Row , Button} from 'react-bootstrap'

const OrderForm = () => {
  
  const orderNumber = 5;

  return (
    <Container className="justify-content-around formbg">
      <div className="my-5 py-3">
        <h1 className="font-60 text-center font-face-cl bg-light bg-opacity-25 text-secondary"><strong>NEW ORDER</strong></h1>
      </div>
      <Form className="mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75">
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." />
            </Form.Group>
          </Col>
          <Col className="mt-2 ">
            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control type="email" placeholder="customername@email.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formOrderDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" name="date" />
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
                <Form.Control type="text" placeholder="Enter Item here..." />
              </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center my-3">
         <Button variant="info" type="submit" className="mb-3 text-secondary">Create New Order</Button>
        </div>
      </Form>
    </Container>
  )
}

export default OrderForm;