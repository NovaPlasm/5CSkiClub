import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component {

    render() {

        return (
            <Div>
                <h1>5C Ski and Snowboard Club</h1>
                <h3>The Ski and Snowboard Club for the Claremont Colleges</h3>
            </Div>
        );
    }
}

const Div = styled.div`
    display: grid;
    max-width: 90rem;
    margin: 7rem auto 0 auto;

    h1 {
        margin-bottom: 1rem;
        margin-top: 0;
        text-align: center;
    }

    h3 {
        margin-top: 0;
        text-align: center;
    }
`;