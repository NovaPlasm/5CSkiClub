import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Logo from './assets/logo.png';
import NavBar from './common/NavBar';

/* Page imports */
import Home from './pages/Home';
import Trips from './pages/Trips';
import Gallery from './pages/Gallery';
import Connect from './pages/Connect';
import ClubInfo from './pages/ClubInfo';
import News from './pages/News';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
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
                <Route path="/trips" component={Trips} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/connect" component={Connect} />
                <Route path="/info/:type" component={ClubInfo} />
                <Route path="/news" component={News} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Main>
        )} />
      </Switch>
    );
  }
}

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
      max-width: 100%;
      overflow-y: hidden;
      z-index: -1;
      display: block;
      position: absolute;
      video {
        max-width: 100%;
      }
    }

    img {
      display: block;
      max-height: 15rem;
      margin: 0 auto;
    }
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }
`;