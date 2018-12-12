import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { loginUser } from '../redux/actions/usersActions'; //make login actions

class Login extends Component {
  state= {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={3} style={{margin:'0 auto', backgrounColor:'red'}}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="" />
            </FormGroup>
            <Button >Login</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default connect(null, {loginUser})(Login);
