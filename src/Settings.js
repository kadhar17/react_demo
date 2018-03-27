import React, { Component } from 'react';
import { Container, Row, Col, ButtonToolbar, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { TextField, validator } from 'react-textfield';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', newpassword: '', confmpassword: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

   // if (this.state.name.length > 0) {
      alert('A name was submitted: ' + this.state.name);
    //}
    // event.preventDefault();
  }
  

  render() {
    return (
      
      <Container>
        <Row>
          <Col><h2>Settings</h2></Col>
        </Row>

        <Row>
          <Col><label className="label-title">About me</label></Col>
        </Row>

        <Row>
          <Col xs="12" lg="3" md="3" sm="12"><br />
          Profile
          </Col>
          <Col xs="12" lg="auto" md="auto" sm="12">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>
                  Name:<br />
                  <Input type="text" placeholder="Jane Doe"/>
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Email:<br />
                  <Input type="email" placeholder="abdul@heymath.com" />
                </Label>
              </FormGroup>
              </Form>
              </Col>
            </Row>



          <Row>
            <Col><label className="label-title">Change Password</label></Col>
          </Row>

          <Row>
            <Col xs="12" lg="3" md="3" sm="12"></Col>
            <Col xs="12" lg="auto" md="auto" sm="12">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>
                New Password*:<br />
                <Input type="text" placeholder="password"/>
              </Label>
            </FormGroup>
              <FormGroup>
                <Label>
                  Confirm Password*:<br />
                  <Input type="password" placeholder="password"/>
                </Label>
              </FormGroup>
<br />
<br />
              <ButtonToolbar>
            <Button> Save</Button>
          </ButtonToolbar>

              </Form>
            </Col>
          </Row>

          

        

      </Container>
    );
  }
}

export default Settings;

