import React from 'react';
import {Container , InputGroup , FormControl } from 'react-bootstrap'


const SearchBar = () => {
  return (
   <Container className="my-5 mx-auto">
      
    <InputGroup size="lg">
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Text id="inputGroup-sizing-lg">
      <label for="filter">Sort&nbsp;&nbsp;</label>
      <select name="filter" class="form-select">
        <option value="name">Alphabetic</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </InputGroup.Text>
  </InputGroup>
   </Container>
  )
}

export default SearchBar