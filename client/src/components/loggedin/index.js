import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import adminkey from "../../key.js";

import SideBar from "./SideBar";
import Header from "./Header";

// Pages
import Profile from "./Profile";
import News from "./News";
import Connect from "./Connect";
import Trips from "./Trips";
import Dashboard from './Dashboard';


class LoggedIn extends React.Component {

  render() {
    const { user, location } = this.props;

    return (
      <LogInWrapper>
        <CssBaseline />
        <SideBar admin={user.adminSecretKey===adminkey} />
        <Main>
          <Header location={location.pathname} />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={Profile} />
          </Switch>
        </Main>
      </LogInWrapper>
    );
  };
}

const LogInWrapper = styled.div`
  
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 1fr;
  background-color: rgb(238, 238, 238);
  margin-left: 30rem;
  min-height: 100vh;
`;

LoggedIn.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(connect(
  mapStateToProps
)(LoggedIn));

export { SideBar };