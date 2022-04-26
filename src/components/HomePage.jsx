import React from 'react';
import {Container ,Row , Col ,Image , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import shipping from '../assets/shipping.jpg'



const HomePage = ({logo}) => {
  return (
    <Container className="l  fluid">
      <Row className="my-5">
        <Col sm={7} className="text-center ">
          <Image src={shipping} alt="logo" className="img-fluid"/>
        </Col>
        <Col sm={5} className="d-flex align-items-center">
          <main  className="fluid d-flex-auto">
            <img src={logo} alt="order pro" className="img-fluid mb-3"/>
            <h2 className="font-weight-light font-face-cl">
              Manage and track your orders day to day         
            </h2>
            <p className="fs-5 font-face-cul">Business made a little easier.</p>
            <Button as={Link} to="/create-order" exact variant="info" className="btn-lg text-wrap ">Start A New Order</Button>
          </main>
        </Col>
      </Row>
    </Container>

  )
}

export default HomePage;