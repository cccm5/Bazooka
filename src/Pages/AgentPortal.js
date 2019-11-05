import React, { Component } from "react";

import {
  Navbar,
  Heading,
  Content,
  Container,
  Hero,
  Box,
  Icon,
  Button,
  Card,
  Media,
  Image,
  Notification,
  Tabs,
  Tile
} from "react-bulma-components/full";
import {
  Field,
  Control,
  Label,
  Input
} from "react-bulma-components/lib/components/form";
import { PageFooter } from "../Components";

import { FaSignOutAlt, FaHome, FaUser } from "react-icons/fa";
import { MdQueue } from "react-icons/md";
import Home from "./AgentPortalViews/Home";
import Pending from "./AgentPortalViews/Pending";
import Members from "./AgentPortalViews/Members";
class AgentPortal extends Component {
  state = {
    pending: true,
    view: "Home"
  };

  hideNotification = () => {
    this.setState({ pending: false });
  };

  render() {
    return (
      <div>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Head>
            <Navbar color="transparent" fixed={"Top"} transparent={true}>
              <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                  <Heading>Bazooka</Heading>
                </Navbar.Item>
              </Navbar.Brand>
              <Navbar.Container position="end">
                <Navbar.Item href="#">
                  <Button outlined color="primary" inverted rounded>
                    Sign Out&nbsp;&nbsp;
                    <Icon>
                      <FaSignOutAlt />
                    </Icon>
                  </Button>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar>
          </Hero.Head>
          <Hero.Body>
            <Container>
              {this.state.pending ? (
                <Notification color="danger" overlay>
                  <Button remove onClick={this.hideNotification} />
                  <strong>New clients available.</strong> Check the pending tab.
                </Notification>
              ) : null}
              <Tabs align="centered" type="toggle-rounded" fullwidth>
                <Tabs.Tab
                  active={this.state.view === "Home"}
                  onClick={() => this.setState({ view: "Home" })}
                >
                  <Icon>
                    <FaHome />
                  </Icon>
                  Home
                </Tabs.Tab>
                <Tabs.Tab
                  active={this.state.view === "Pending"}
                  onClick={() => this.setState({ view: "Pending" })}
                >
                  <Icon>
                    <MdQueue />
                  </Icon>
                  Pending
                </Tabs.Tab>
                <Tabs.Tab
                  active={this.state.view === "Members"}
                  onClick={() => this.setState({ view: "Members" })}
                >
                  <Icon>
                    <FaUser />
                  </Icon>
                  Members
                </Tabs.Tab>
              </Tabs>
              {this.state.view === "Home" ? (
                <Home />
              ) : this.state.view === "Pending" ? (
                <Pending />
              ) : (
                <Members />
              )}
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

export default AgentPortal;
