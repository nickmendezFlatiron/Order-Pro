import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav , Container }from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import "../src/App.css"


const Navigation = () => {

  return (
    
      <Navbar bg="info" variant="light" >
    <Container >
      <img src={logo} alt="logo" />
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