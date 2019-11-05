import React, { Component } from "react";
import {
  Heading,
  Content,
  Container,
  Hero} from "react-bulma-components/full";
import { PageFooter } from "../Components";

class Home extends Component {
  render() {
    return (
      <>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Head />
          <Hero.Body>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <Heading size={1}>Bazooka</Heading>
              </Content>
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

export default Home;
