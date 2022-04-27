import React from 'react';
import {Container , InputGroup , FormControl } from 'react-bootstrap'


const SearchBar = () => {
  return (
   <Container className="">
    <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Enter search quiery here...'/>
      <InputGroup.Text id="inputGroup-sizing-lg">
        <label for="filter" className="text-secondary">Sort&nbsp;&nbsp;</label>
        <select name="filter" class="form-select">
        <option value="default">Default</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="descending">Descending</option>
        </select>
      </InputGroup.Text>
  </InputGroup>
   </Container>
  )
}

export default SearchBar