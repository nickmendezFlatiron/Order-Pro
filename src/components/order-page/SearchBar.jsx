import { React } from 'react';
import FormControl  from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'


const SearchBar = ({setSearch , setFilter , search}) => {
  // searchbar input acts as a controlled form , getting it's input from state
  function handleFilter(e) {
    setFilter(e.target.value)
  }
  function handleSearch (e) {
    setSearch(e.target.value)
  }
  
  return (
   <Container>
    <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Enter search quiery here...' value={search} onChange={handleSearch}/>
      <InputGroup.Text id="inputGroup-sizing-lg">
        <label  className="text-secondary" >Sort&nbsp;&nbsp;</label>
        <select name="filter" className="form-select" onChange={handleFilter}>
        <option value="default">Default</option>
          <option value="byName">By Name</option>
          <option value="descending">Descending</option>
        </select>
      </InputGroup.Text>
  </InputGroup>
   </Container>
  )
}

export default SearchBar