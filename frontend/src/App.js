import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Background from './assets/background2.jpg';
import NavBar from './common/NavBar';

/* Page imports */
import Home from './pages/Home';
import Trips from './pages/Trips';
import Gallary from './pages/Gallary';
import Connect from './pages/Connect';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <Main>
        <div className="layer">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trips" component={Trips} />
            <Route path="/gallary" component={Gallary} />
            <Route path="/connect" component={Connect} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Main>
    );
  }
}

const Main = styled.main`
  background-image: url(${Background});
  background-size: cover;
  width: 100vw;
  height: 100%;
  float: left;
  min-height: 100vh;
  color: ${props => props.theme.black};

  .layer {
    height: 100vh;
    width: 100vw;
    float: left;
    background: ${props => props.theme.white};
    background: linear-gradient(180deg, rgba(255,251,252,1) 0%, rgba(255,251,252,0.8) 10%, rgba(255,251,252,0) 70%);
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }
`;