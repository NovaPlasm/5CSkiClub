import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

// Material UI Components
import { MenuItem, MenuList, IconButton, Hidden, Popper, Grow, Paper, ClickAwayListener, Divider } from "@material-ui/core";

// Material UI Icons
import { Notifications, Person } from "@material-ui/icons";

import { logoutUser } from "../../actions/authActions";

class ProfileLinks extends React.Component {

  constructor() {
    super();

    this.state = {
      openProfile: null
    };

    this.handleProfileClick = this.handleProfileClick.bind(this);

  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  handleProfileClick(e) {
    const { openProfile } = this.state;

    if (openProfile) {
      this.setState({openProfile: null});
    } else {
      this.setState({openProfile: e.currentTarget})
    }
  }

  render() {
    const { openProfile } = this.state;

    return (
      <ProfileWrapper>
        <IconButton
          color="primary"
          className="button-link"
          onClick={null}
        >
          <Notifications />
          <Hidden mdUp implementation="css">
            <p className="link-text">Notification</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="primary"
          className="button-link"
          onClick={this.handleProfileClick}
        >
          <Person />
          <Hidden mdUp implementation="css">
            <p className="link-text">Profile</p>
          </Hidden>
        </IconButton>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ popperClose: !openProfile }) +
            " popper-nav"
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => this.setState({openProfile: null})}>
                  <MenuList role="menu">
                    <NavLink
                      to="/profile"
                      className="clear-link"
                    >
                      <MenuItem
                        onClick={() => this.setState({openProfile: null})}
                        className="dropdown-item"
                      >
                        Profile
                      </MenuItem>
                    </NavLink>
                    <MenuItem
                      onClick={() => this.setState({openProfile: null})}
                      className="dropdown-item"
                    >
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={this.onLogoutClick}
                      className="dropdown-item"
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ProfileWrapper>
    );
  };
}

const ProfileWrapper = styled.header`
  position: relative;
  font-size: 100%;

  .button-link {
    .link-text {
      z-index: 4;
      font-size: 1.4rem;
      margin: 0;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      margin: 1rem 1.5rem 0;
      width: -webkit-fill-available;

      & svg {
        width: 2.4rem;
        height: 3rem;
        margin: 0 1.5rem 0 -1.5rem;
      }

      & .fab,& .fas,& .far,& .fal,& .material-icons {
        font-size: 2.4rem;
        line-height: 3rem;
        width: 2.4rem;
        height: 3rem;
        margin: 0 1.5rem 0 -1.5rem;
      }

      & > span {
        justify-content: flex-start;
        width: 100%;
      }
    }
  }

  .popper-nav {
    @media only screen and (max-width: 768px) {
      position: static !important;
      left: unset !important;
      top: unset !important;
      transform: none !important;
      will-change: unset !important;

      & > div {
        box-shadow: none !important;
        margin: 0 !important;
        transition: none !important;
        padding: 0 !important;
        background-color: transparent !important;

        & ul li {
          color: white !important;
          margin: 1rem 1.5rem 0 !important;
          padding: 1rem 1.5rem !important;

          &:hover {
            background-color: hsla(0, 0%, 78%, .2);
            box-shadow: none;
          }
        }
      }
    }

    &.popperClose {
      pointer-events: none;
    }

    .clear-link {
      font-size: inherit;
      color: inherit;
      text-decoration: none;
    }

    .dropdown-item {
      font-size: 1.3rem;
      padding: 1rem 2rem;
      margin: 0 0.5rem;
      border-radius: 0.2rem;
      transition: all 150ms linear;
      display: block;
      clear: both;
      font-weight: 400;
      line-height: 1.42857132;
      color: gray;
      white-space: nowrap;
      height: unset;
      min-height: unset;

      &:hover {
        background-color: rgba(0, 172, 193, 1);
        color: white;
        box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.14), 0 0.7rem 1rem -0.5rem rgba(0, 172, 193,.4);
      }
    }
  }
`;

ProfileLinks.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(ProfileLinks));