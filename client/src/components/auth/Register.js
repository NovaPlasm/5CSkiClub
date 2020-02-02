import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import styled from 'styled-components';

// Material UI
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, Select, InputLabel, FormControl } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      college: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      college: this.state.college
    };

    this.props.registerUser(newUser, this.props.history)
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
            Sign up
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
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              type="text"
              className={classnames("", {
                invalid: errors.name
              })}
            />
            <span className="red-text">
              {errors.name}
            </span>
            <FormControl
              margin="normal"
              fullWidth
              required
              error={errors.college}
              className={classnames("", {
                invalid: errors.college
              })}
            >
              <InputLabel htmlFor="college" className="college-label">College</InputLabel>
              <Select
                native
                variant="outlined"
                required
                fullWidth
                id="college"
                label="College"
                name="college"
                onChange={this.onChange}
                value={this.state.college}
                >
                  <option default value=""></option>
                  <option value="Pomona">Pomona</option>
                  <option value="Harvey Mudd">Harvey Mudd</option>
                  <option value="Scripps">Scripps</option>
                  <option value="Claremont McKenna">Claremont McKenna</option>
                  <option value="Pitzer">Pitzer</option>
              </Select>
            </FormControl>
            <span className="red-text">
              {errors.college}
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
                invalid: errors.password
              })}
            />
            <span className="red-text">
              {errors.password}
            </span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              className={classnames("", {
                invalid: errors.password2
              })}
            />
            <span className="red-text">
              {errors.password2}
            </span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign Up
            </Button>
            <Link to="/login">
              {"Already have an account? Sign In"}
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

  input,select {
    font-size: 1.6rem !important;
  }

  select:focus {
    background-color: white !important;
  }

  .submit {
    margin: 1rem 0 0.2rem 0;
  }

  .college-label {
    left: 1.5rem;
    top: -0.5rem;
    z-index: 2;
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));