import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import styled from 'styled-components';

// Material UI
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={this.onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound
              })}
            />
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign In
            </Button>
            <Link to="/register">
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </Paper>
      </Container>
    );
  }
}

const Paper = styled.div`
  margin-top: .8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .avatar {
    margin: .1rem;
    background-color: #f50057;
  }

  form {
    width: 100%;
    margin-top: 0.1rem;
    * {
      font-size: 100%;
    }
  }

  input {
    font-size: 1.6rem !important;
  }

  .submit {
    margin: 1rem 0 0.2rem 0;
  }

  .red-text {
    color: red;
    font-size: 1.2rem;
    display: block;
  }

  a {
    float: right;
    margin-top: 1rem;
  }
`;

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);