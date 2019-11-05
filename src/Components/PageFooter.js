import React, { Component } from "react";
import { Content, Container, Footer, Icon } from "react-bulma-components/full";
import { FaRegHeart } from "react-icons/fa";

class PageFooter extends Component {
  render() {
    return (
      <Footer style={{ backgroundColor: "transparent", padding: "0rem 1.5rem 3rem" }}>
        <Container>
          <Content style={{ textAlign: "center" }}>
            <p>
              Copyright {new Date().getFullYear()} &copy;{" "}
              <strong>Bazooka</strong> <br />
              Made with{" "}
              <Icon>
                <FaRegHeart />
              </Icon>{" "}
              by Dan Davidson, Andi Duro, and Kishan Patel
            </p>
          </Content>
        </Container>
      </Footer>
    );
  }
}
export default PageFooter;
