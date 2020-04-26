import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Material UI Components
import { List, ListItem, ListItemText } from "@material-ui/core";

// Material UI Icons
import { Dashboard, Person, Explore, DynamicFeed, Collections, Group } from "@material-ui/icons";

import Background from "../../assets/background.jpg";
import Logo from "../../assets/testlogo3.png";

class SideBar extends React.Component {

  render() {
    const { admin } = this.props;

    return (
      <SideBarContainer>
        <span className="fade">
          <img src={Logo} alt="LINES" />
          <List className="list">
            {admin?<NavLink
              to="/dashboard"
              className="item"
              activeClassName="active"
            >
              <ListItem button className="item-link">
                <Dashboard className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="Admin Dashboard"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>:null}
            <NavLink
              to="/profile"
              className="item"
              activeClassName="active"
            >
              <ListItem button className="item-link">
                <Person className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="Profile"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="#" // disabled for now, goes to /trips
              className="item inactive"
              activeClassName="active2"
            >
              <ListItem button className="item-link">
                <Explore className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="Trips - WIP"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="/news"
              className="item"
              activeClassName="active"
            >
              <ListItem button className="item-link">
                <DynamicFeed className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="News"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="#" // disabled for now, goes to /gallery
              className="item inactive"
              activeClassName="active2"
            >
              <ListItem button className="item-link">
                <Collections className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="Gallary - WIP"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="/connect"
              className="item"
              activeClassName="active"
            >
              <ListItem button className="item-link">
                <Group className="item-icon" />
                <ListItemText
                  className="item-text"
                  primary="Connect"
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          </List>
        </span>
      </SideBarContainer>
    );
  };
}

const SideBarContainer = styled.nav`
  height: 100vh;
  background: url(${Background});
  background-position: center;
  position: fixed;
  top: 0;
  width: 30rem;

  .fade {
    background-color: rgba(0, 0, 0, 0.75);
    height: 100%;
    display: block;

    img {
      width: 100%;
      padding: 4rem 4rem 0 4rem;
      margin-bottom: -0.55rem;
    }

    .list {
      padding: 2rem 0;
      list-style: none;
      position: unset;
      min-width: 16rem;

      .item {
        position: relative;
        display: block;
        text-decoration: none;

        &.inactive {
          background-color: grey;
          cursor: default;

          .item-text,.item-icon {
            color: #3b3b3b !important;
          }
        }

        &.active {
          .item-link {
            box-shadow: 0 12px 20px -10px rgba(0, 172, 193,.28), 0 4px 20px 0 rgba(0, 0, 0,.12), 0 7px 8px -5px rgba(0, 172, 193,.2);
            background-color: #00acc1;

            .item-icon {
              color: white;
            }
          }
        }

        &:hover,&:focus,&:visited {
          color: white;
        }

        .item-link {
          width: auto;
          transition: all 300ms linear;
          margin: 1rem 1.5rem 0;
          border-radius: 0.3rem;
          position: relative;
          display: block;
          padding: 1rem 1.5rem;
          background-color: transparent;
          cursor: inherit;

          .item-icon {
            width: 2.4rem;
            height: 3rem;
            font-size: 2.4rem;
            line-height: 3rem;
            float: left;
            margin-right: 1.5rem;
            text-align: center;
            vertical-align: middle;
            color: rgba(255, 255, 255, 0.8);
          }

          .item-text {
            margin: 0;
            line-height: 3rem;
            font-size: 1.4rem;
            color: white;
          }
        }
      }
    }
  }
`;

export default SideBar;