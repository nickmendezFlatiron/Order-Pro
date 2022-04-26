import React from 'react';
import {Container ,Row , Col ,Image } from 'react-bootstrap';
import shipping from '../assets/shipping.jpg'


const HomePage = () => {
  return (
    <Container className="xl">
      <Row className="my-5">
        <Col sm={7} className="text-center border border-primary ">
          <Image src={shipping} alt="logo" className="img-fluid"/>
        </Col>
        <Col sm={5} className="border border-primary justify-content-start">
          <main className="text-left">
          <h1>Order Pro</h1>
            <h2 className="font-weight-light">Manage and track your orders day to day.</h2>
      
          </main>
        </Col>
      </Row>
    </Container>

  )
}

export default HomePage;