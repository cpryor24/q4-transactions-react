import React, { Component } from 'react';
import Login from './login'
import { Jumbotron, Container } from 'reactstrap';

class Main extends Component  {

  render(){
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
          </Container>
        </Jumbotron>
        <Login />
      </div>
    );
  }
};

export default Main;
