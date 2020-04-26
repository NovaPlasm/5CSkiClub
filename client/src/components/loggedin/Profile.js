import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"
import { Button, TextField, Checkbox } from '@material-ui/core';

import { GridContainer, GridItem } from "../common/Grid";
import { Card, CardBody, CardHeader, CardFooter } from "../common/Card";

import { updateUser } from "../../actions/authActions";

class Profile extends React.Component {

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
    const target = e.target.id;
    let newUser = this.state.user;
    if (target === "vehicleStatus" || target === "gearStorage" || target === "ownsGear" || target === "winterIkonPass") 
      newUser[target] = e.target.checked
    else 
      newUser[target] = e.target.value
    this.setState({ user: newUser });
  };

  onSubmit = e => {
    e.preventDefault();

    const updateUser = this.state.user;

    this.props.updateUser(updateUser, this.props.history)
  };

  render() {
    const { errors, user } = this.state;

    console.log(user);

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <form noValidate onSubmit={this.onSubmit}>
            <Card>
              <CardHeader color="primary">
                <h4>Edit Profile</h4>
                <p>Complete your profile to access trips!</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["idNumber"] || ''}
                      error={errors["idNumber"]}
                      id="idNumber"
                      type="text"
                      label="ID Number"
                      helperText={errors["idNumber"]}
                      className={classnames("", {
                        invalid: errors["idNumber"]
                      })}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["gradYear"] || ''}
                      error={errors["gradYear"]}
                      id="gradYear"
                      type="text"
                      label="Graduation Year"
                      helperText={errors["gradYear"]}
                      className={classnames("", {
                        invalid: errors["gradYear"]
                      })}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["birthDate"] || ''}
                      error={errors["birthDate"]}
                      id="birthDate"
                      type="date"
                      label="Birth Date"
                      helperText={errors["birthDate"]}
                      className={classnames("", {
                        invalid: errors["birthDate"]
                      })}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["phoneNumber"] || ''}
                      error={errors["phoneNumber"]}
                      id="phoneNumber"
                      type="phone"
                      label="Phone Number"
                      helperText={errors["phoneNumber"]}
                      className={classnames("", {
                        invalid: errors["phoneNumber"]
                      })}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["dietaryInfo"] || ''}
                      error={errors["dietaryInfo"]}
                      id="dietaryInfo"
                      type="text"
                      label="Dietary Info"
                      helperText={errors["dietaryInfo"]}
                      className={classnames("", {
                        invalid: errors["dietaryInfo"]
                      })}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["experienceLevel"] || ''}
                      error={errors["experienceLevel"]}
                      id="experienceLevel"
                      type="text"
                      label="Experience Level"
                      helperText={errors["experienceLevel"]}
                      className={classnames("", {
                        invalid: errors["experienceLevel"]
                      })}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Checkbox
                      onChange={(this.onChange)}
                      checked={this.state.user["vehicleStatus"] || false}
                      id="vehicleStatus"
                      type="checkbox"
                    />
                    <label>Do you own a vehicle?</label>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["vehicleSpots"] || ''}
                      error={errors["vehicleSpots"]}
                      disabled={!this.state.user["vehicleStatus"]}
                      id="vehicleSpots"
                      type="number"
                      label="How many seats? (include your own)"
                      helperText={errors["vehicleSpots"]}
                      className={classnames("", {
                        invalid: errors["vehicleSpots"]
                      })}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Checkbox
                      onChange={this.onChange}
                      disabled={!this.state.user["vehicleStatus"]}
                      checked={this.state.user["gearStorage"] || false}
                      id="gearStorage"
                      type="checkbox"
                    />
                    <label
                      className={classnames("", {
                        disabled: !this.state.user["vehicleStatus"]
                      })}
                    >
                      Do you have gear storage?
                    </label>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Checkbox
                      onChange={this.onChange}
                      checked={this.state.user["ownsGear"] || false}
                      id="ownsGear"
                      type="checkbox"
                    />
                    <label>Do you own your own gear?</label>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Checkbox
                      onChange={this.onChange}
                      checked={this.state.user["winterIkonPass"] || false}
                      id="winterIkonPass"
                      type="checkbox"
                    />
                    <label>Do you/will you have an Ikon pass?</label>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      onChange={this.onChange}
                      value={this.state.user["specialConsiderations"] || ''}
                      error={errors["specialConsiderations"]}
                      id="specialConsiderations"
                      type="text"
                      label="Any other special considerations?"
                      multiline
                      helperText={errors["specialConsiderations"]}
                      className={classnames("", {
                        invalid: errors["specialConsiderations"]
                      })}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button
                  variant="contained"
                  type="submit"
                >
                  Update Profile
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  };
}

Profile.propTypes = {
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
  { updateUser }
)(Profile);