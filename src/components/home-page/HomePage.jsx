import React from 'react';
import {Container ,Row , Col ,Image , Button} from 'react-bootstrap';
import Link from 'react-router-dom/Link'
import shipping from '../../assets/shipping.jpg'
import SellingPoints from './SellingPoints' 



const HomePage = ({logo}) => {
  return (
    <Container className="fluid">
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
            <p className="fs-5 font-face-cul">Your business, made a little easier.</p>
            <Button as={Link} to="/create-order" exact variant="info" className="btn-lg text-wrap text-black-50">Create A New Order</Button>
          </main>
        </Col>
      </Row>
      <SellingPoints />
    </Container>

  )
}

export default HomePage;