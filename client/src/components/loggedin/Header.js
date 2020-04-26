import React from "react";
import styled from "styled-components";

// Material UI Components
import { AppBar, Toolbar, IconButton, Hidden } from "@material-ui/core";

// Material UI Icons
import { Menu } from "@material-ui/icons";

import ProfileLinks from "./ProfileLinks";

class Header extends React.Component {
  
  render() {
    const { location } = this.props;

    return (
      <HeaderWrapper>
        <AppBar className="app-bar">
          <Toolbar className="container">
            <h1>{location.charAt(1).toUpperCase() + location.slice(2)}</h1>
            <Hidden smDown implementation="css">
              <ProfileLinks />
            </Hidden>
            <Hidden mdUp implementation="css">
              <IconButton
                color="primary"
                aria-label="open drawer"
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HeaderWrapper>
    );
  };
}

const HeaderWrapper = styled.header`
  position: relative;

  .app-bar {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    padding-top: 1rem;
    z-index: 1029;
    color: white;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem 0;
    transition: all 150ms ease 0s;
    min-height: 5rem;
    display: block;

    .container {
      min-height: 5rem;
      padding: 0 3.5rem 0 1.5rem;
      margin: 0 auto;
      
      h1 {
        flex: 1;
        color: rgb(85, 85, 85);
        font-weight: 100;
        font-size: 3.4rem;
        margin-left: 2rem;
      }
    }
  }
`;

export default Header;