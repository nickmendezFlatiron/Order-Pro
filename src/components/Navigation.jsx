import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav , Container , Image}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {

  return (
    
      <Navbar bg="info" variant="light" >
    <Container >
      <h3>Order Pro</h3>
      <Nav className="justify-content-end">
        <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
        <Nav.Link as={Link} to="/orders"  exact>Orders</Nav.Link>
        <Nav.Link as={Link} to="/create-order" exact>Create Order</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    
    
  )
}

export default Navigation;