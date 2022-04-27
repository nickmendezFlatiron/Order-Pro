import React from 'react'
import {Container ,Row , Col} from 'react-bootstrap'

const SellingPoints = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col sm={4} >
          <img src="https://via.placeholder.com/150" alt='150'  className='border rounded-circle'/>
          <br/>
          <br/>
          <p>Some Text</p>
        </Col>
        <Col sm={4}>
          <img src="https://via.placeholder.com/150" alt='150'  className='border rounded-circle'/>
          <br/>
          <br/>
          <p>Some Text</p>
        </Col>
        <Col sm={4}>
          <img src="https://via.placeholder.com/150" alt='150'  className='border rounded-circle'/>
          <br/>
          <br/>
          <p>Some Text</p>
        </Col>
      </Row>
    </Container>
  )
}

export default SellingPoints