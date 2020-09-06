import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Dropdown from '../Dropdown';

export default class NavBar extends React.Component {

    render() {
        return (
            <Nav>
                <Button type="nav" to="/">Home</Button>
                {/* <Button type="nav" to="/gallery">Gallery</Button> */}
            
                       <Dropdown type="nav" title="Education &#9660;">
                    <Button type="nav" to="/education/beginner">Beginner</Button>
                    <Button type="nav" to="/education/intermediate">Intermediate</Button>
                    <Button type="nav" to="/education/advanced">Advanced</Button>
                </Dropdown>
            
                        <Dropdown type="nav" title="Recreation &#9660;">
                    <Button type="nav" to="/recreation/beginner_days">Beginner Days</Button>
                    <Button type="nav" to="/recreation/reading_daze">Reading Daze</Button>
                    <Button type="nav" to="/recreation/trips">Club Trips</Button>
                    <Button type="nav" to="/recreation/club_events">Club Events</Button>
                    <Button type="nav" to="/recreation/gear">Gear Checkout</Button>
                    <Button type="nav" to="/recreation/ikon">Ikon Passes</Button>
                </Dropdown>
            
            
            
            
                <Dropdown type="nav" title="Team &#9660;">
                    <Button type="nav" to="/team/about">About</Button>
                    <Button type="nav" to="/team/commitment">Commitment</Button>
                    <Button type="nav" to="/team/costs">Costs</Button>
                    <Button type="nav" to="/team/schedule">Schedule</Button>

                </Dropdown>
            
            
                        
                <Dropdown type="nav" title="Contact &#9660;">
                    <Button type="nav" to="/connect">Leadership</Button>
                    <Button type="nav" to="/contact/club_contact">Club Contact</Button>
                </Dropdown>
            
               <Button type="nav" to="/news">News</Button>
            </Nav>
            
        );
    }
}

const Nav = styled.nav`
    display: grid;
    width: 100%;
    max-width: 90rem;
    margin: 3rem auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
    position: relative;
`;