import React, { Component } from "react";
import {
  Navbar,
  Heading,
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
  Input
} from "react-bulma-components/lib/components/form";
import { FaLock, FaEnvelope } from "react-icons/fa";
import "../App.sass";
import { PageFooter } from "../Components";
import {Link} from "react-router-dom"
import { AgentPortal } from ".";

class AgentLogin extends Component {
  state = {
    open: false,
    password: "",
    username: "",
    organization: "",
    termsAccepted: false
  };

  onChange = evt => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  };

  render() {
    return (
      <div>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Head>
            <Navbar
              color="transparent"
              fixed={"Top"}
              active={true}
              transparent={true}
            >
              <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                  <Heading>Bazooka</Heading>
                </Navbar.Item>
                <Navbar.Burger
                  active={this.state.open}
                  onClick={() =>
                    this.setState(previousState => ({
                      open: !previousState.open
                    }))
                  }
                />
              </Navbar.Brand>
              <Navbar.Menu active={this.state.open} />
            </Navbar>
          </Hero.Head>
          <Hero.Body>
            <Container>
              <Box color="primary">
                <Content>
                  <h1>Agent Login</h1>
                  <Field>
                    <Label>Email</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="JaneDoe@Hanover.com"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                      />
                      <Icon align="left">
                        <FaEnvelope />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Password</Label>
                    <Control iconLeft>
                      <Input
                        placeholder="password123"
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                      />
                      <Icon align="left">
                        <FaLock />
                      </Icon>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button renderAs={Link} to="/agent-portal" component={AgentPortal} type="primary" color="primary">
                        Login
                      </Button>
                    </Control>
                  </Field>
                </Content>
              </Box>
            </Container>
          </Hero.Body>
          <Hero.Footer>
            <PageFooter />
          </Hero.Footer>
        </Hero>
      </div>
    );
  }
}

export default AgentLogin;
