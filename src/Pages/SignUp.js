import React, { Component } from "react";
import {
  Content,
  Container,
  Hero,
  Box,
  Icon,
  Button
} from "react-bulma-components/full";

import {
  Field,
  Control,
  Label,
  Input,
  Checkbox,
  Select
} from "react-bulma-components/lib/components/form";

import { FaSign, FaCity, FaEnvelope, FaUser, FaCalendar, FaHashtag, FaRuler } from "react-icons/fa";

import { PageFooter } from "../Components";

import States from "../Data/StateMap";
const mongoose = require('mongoose');

class SignUp extends Component {
  state = {
    termsAccepted: false,
    name: "",
    territory: "",
    address: "",
    city: "",
    zipcode: "",
    date: "",
    termLength: "",
  };

  onSubmit = () => {
      // First validate data
      if(!this.validate()){
        return;
      }
     // Than forward to api and wait for response
    
  }

  validate = () => {

    return true;
  }

  onChange = evt => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  };
  render() {
    return (
      <>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Head />
          <Hero.Body>
            <Container>
              <Box color="primary">
                <Content>
                  <h1>Sign Up</h1>
                  <Field>
                    <Label>Name</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="Jane Doe"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      <Icon align="left">
                        <FaUser />
                      </Icon>
                    </Control>
                  </Field>

                  <Field>
                    <Label>Email</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="JaneDoe@Hanover.com"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        type="email"
                      />
                      <Icon align="left">
                        <FaEnvelope />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Street Address</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="17 Place Street"
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                        type="email"
                      />
                      <Icon align="left">
                        <FaSign />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Label>City</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="Hartford"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChange}
                      />
                      <Icon align="left">
                        <FaCity />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Label>State</Label>
                    <Control>
                      <Select
                        onChange={this.onChange}
                        name="territory"
                        value={this.state.territory}
                      >
                        <option value="">Select</option>
                        {Array.from(Object.keys(States)).map(id => (
                          <option value={id} key={id}>{id}</option>
                        ))}
                      </Select>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Zipcode</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="00000"
                        name="zipcode"
                        value={this.state.zipcode}
                        onChange={this.onChange}
                        type="number"
                      />
                      <Icon align="left">
                        <FaHashtag />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Start Date</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="mm/dd/yyyy"
                        name="date"
                        value={this.state.date}
                        onChange={this.onChange}
                        type="date"
                      />
                      <Icon align="left">
                        <FaCalendar />
                      </Icon>
                    </Control>
                  </Field>

                  <Field>
                    <Label>Coverage Length (Years)</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="3"
                        name="termLength"
                        value={this.state.termLength}
                        onChange={this.onChange}
                        type="number"
                      />
                      <Icon align="left">
                        <FaRuler />
                      </Icon>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Checkbox
                        name="termsAccepted"
                        onChange={this.onChange}
                        checked={this.state.termsAccepted}
                      >
                        {" "}
                        I agree to the <a href="#agree">terms and conditions</a>
                      </Checkbox>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Button
                        disabled={!this.state.termsAccepted}
                        type="primary"
                        color="primary"
                        onClick={this.onSubmit}
                      >
                        Submit
                      </Button>
                    </Control>
                  </Field>
                  {/* <pre>
                    <code>{JSON.stringify(this.state, null, 2)}</code>
                  </pre> */}
                </Content>
              </Box>
            </Container>
          </Hero.Body>
          <Hero.Footer>
            <PageFooter />
          </Hero.Footer>
        </Hero>
      </>
    );
  }
}

export default SignUp;
