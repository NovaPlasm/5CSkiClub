import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"
import Button from '@material-ui/core/Button';

import { logoutUser, updateUser } from "../../actions/authActions";

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      user: { },
      errors: {}
    };
  }

  componentWillMount() {
    if (this.props.user) {
      this.setState({
        user: this.props.user
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.user) {
      this.setState({
        user: nextProps.user
      });
    }
  }
  
  onChange = e => {
    let newUser = this.state.user;
    newUser[e.target.id] = e.target.value
    this.setState({ user: newUser });
  };

  onSubmit = e => {
    e.preventDefault();

    const updateUser = this.state.user;

    this.props.updateUser(updateUser, this.props.history)
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  renderInput(input) {
    const { errors } = this.state;

    return (
      <div key={input.name}>
        <input
          onChange={this.onChange}
          value={this.state.user[input.name] || ''}
          error={errors[input.name]}
          id={`${input.name}`}
          type={input.type}
          className={classnames("", {
            invalid: errors[input.name]
          })}
        />
        <label htmlFor={input.name}>{input.display}</label>
        <span style={{color: 'red'}}>{errors[input.name]}</span>
      </div>
    );
  }

  renderForm() {

    const userDetails = [
      {name: "idNumber", display: "ID Number", type: "text"},
      {name: "birthDate", display: "Birth Date", type: "date"},
      {name: "phoneNumber", display: "Phone Number", type: "text"},
      {name: "gradYear", display: "Graduation Year", type: "text"},
      {name: "dietaryInfo", display: "Dietary Info", type: "text"},
      {name: "vehicleStatus", display: "Do you own a vehicle?", type: "checkbox"},
      {name: "vehicleSpots", display: "How many seats (including your own)", type: "number"},
      {name: "gearStorage", display: "Do you have gear storage?", type: "checkbox"},
      {name: "ownsGear", display: "Do you own your own gear?", type: "checkbox"},
      {name: "winterIkonPass", display: "Do you/will you have an Ikon pass", type: "checkbox"},
      {name: "experienceLevel", display: "Experience Level", type: "text"},
      {name: "specialConsiderations", display: "Any other special considerations?", type: "text"}
    ];

    console.log(this.state);

    return (
      <form noValidate onSubmit={this.onSubmit}>
        {
          userDetails.map(detail => (
            this.renderInput(detail)
          ))
        }
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Update
          </Button>
        </div>
      </form>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h4>
          <b>Hey there,</b> { user.name.split(" ")[0] }
          <p>
            You are logged into a full-stack MERN app
          </p>
          <p>Your profile is {!user.idNumber?'not ':''}filled</p>
          {this.renderForm()}
        </h4>
        <Button
          variant="contained"
          color="primary"
          onClick={this.onLogoutClick}
        >
          Logout
        </Button>
      </div>
    );
  };
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser, updateUser }
)(Dashboard);