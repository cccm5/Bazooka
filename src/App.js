import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";

import {AgentLogin, Home, SignUp, HanoverLogin, AgentPortal} from "./Pages"

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/agent-login" component={AgentLogin} />
          <Route path="/hanover-login" component={HanoverLogin}/>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/agent-portal" component={AgentPortal} />
        </>
      </Router>
    );
  }
}
export default App;
