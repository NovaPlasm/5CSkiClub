import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

export default class NavBar extends React.Component {

    render() {
        return (
            <Nav>
                <Button type="nav" to="/">Home</Button>
                <Button type="nav" to="/trips">Trips</Button>
                <Button type="nav" to="/gallary">Gallary</Button>
                <Button type="nav" to="/connect">Connect</Button>
            </Nav>
        );
    }
}

const Nav = styled.nav`
    display: grid;
    width: 100%;
    max-width: 90rem;
    margin: 3rem auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
`;