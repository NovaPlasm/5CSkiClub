import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Logo from './assets/testlogo.png';
import NavBar from './components/common/NavBar';

/* Logged out page imports */
import Home from './pages/Home';
import Trips from './pages/Trips';
import Gallery from './pages/Gallery';
import Connect from './pages/Connect';
import ClubInfo from './pages/ClubInfo';
import News from './pages/News';
import NotFound from './pages/NotFound';

/* Auth page imports */
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

/* Note we transition to a SPA environment on logged in, so
 * we let the main logged in app handle page transitions */
import Dashboard from "./components/dashboard";
import LoggedIn from "./components/loggedin";

class App extends Component {

  renderLoggedOut() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          <Main home>
            <div className="layer">
              <div className="videoContainer">
                <video autoPlay loop muted poster={'https://i.imgur.com/7FbfWL2.png'}>
                  <source src={'https://www.dropbox.com/s/s3ymosyhd08wct6/edit.mp4?dl=1'} type='video/mp4' />
                </video>
              </div>
              <img src={Logo} alt="LINES" />
              <NavBar />
              <Home />
            </div>
          </Main>
        )} />
        <Route render={() => (
          <Main>
            <div className="layer">
              <img src={Logo} alt="LINES" />
              <NavBar />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/trips" component={Trips} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/connect" component={Connect} />
                <Route path="/info/:type" component={ClubInfo} />
                <Route path="/news" component={News} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Main>
        )} />
      </Switch>
    );
  }

  render() {
    const { auth } = this.props;

    return auth.isAuthenticated === true ? <LoggedIn /> : this.renderLoggedOut();
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);

const Main = styled.main`
  background: ${props => props.home ? `none`: props.theme.white};
  background-size: cover;
  width: 100vw;
  height: 100%;
  float: left;
  min-height: 100vh;
  color: ${props => props.theme.black};

  .layer {
    height: 100vh;
    width: 100%;
    float: left;
    background: ${props => props.theme.white};
    background: linear-gradient(180deg, rgba(255,251,252,1) 0%, rgba(255,251,252,0.8) 10%, rgba(255,251,252,0) 70%);

    .videoContainer {
      max-height: 100%;
      overflow-y: hidden;
      height: auto;
      width: 100%;
      z-index: -1;
      display: block;
      position: absolute;
      video {
        width: 100%;
        height: auto;
      }

      @media only screen and (max-width: 48em) {
        display: none;
      }
    }

    img {
      display: block;
      max-height: 10rem;
      margin: 4rem auto 2rem auto;
    }
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }
`;