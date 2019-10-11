import React from 'react';
import styled from 'styled-components';

export default class ClubInfo extends React.Component {

    render() {

        return (
            <Div>
                <h1>Register and Join Trips Here!</h1>
                <h3>This page is currently under construction.</h3>
            </Div>
        );
    }
}

const Div = styled.div`
    display: grid;
    max-width: 90rem;
    margin: 10rem auto;

    h1 {
        margin-bottom: 1rem;
        text-align: center;
    }

    h3 {
        margin-top: 0;
        text-align: center;
    }
`;