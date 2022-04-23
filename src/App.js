import React from "react";
import {Route , Switch} from 'react-router-dom'
import Navigation from "./components/Navigation";


import { Container } from "react-bootstrap";


const App = () => {
  return (
      <Container>
      <Navigation />
      <h1>Hello World</h1>
      </Container>
  );
}

export default App;
