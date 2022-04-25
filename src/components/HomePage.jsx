import React from 'react';
import {Container ,Row , Col ,Image } from 'react-bootstrap';


const HomePage = () => {
  return (
    <Container className="xl">
      <Row className="my-5">
        <Col sm={7} className="text-center border border-primary ">
          <Image src="https://picsum.photos/600/400" alt="logo"/>
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