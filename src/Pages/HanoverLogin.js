import React, { Component } from "react";
import {
  Hero} from "react-bulma-components/full";
import { PageFooter } from "../Components";

class HanoverLogin extends Component {
  render() {
    return (
      <>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Head />
          <Hero.Body>t</Hero.Body>
          <Hero.Footer>
            <PageFooter />
          </Hero.Footer>
        </Hero>
      </>
    );
  }
}

export default HanoverLogin;
