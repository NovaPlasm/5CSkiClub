import React from 'react';
import styled from 'styled-components';

export default class NotFound extends React.Component {

    render() {

        return (
            <Container>
                <h1>
                    Uh oh!  We can't find that page
                </h1>
                <h3>
                    If you think this might be an error on our part, please let us know!
                </h3>
            </Container>
        );
    }
}

const Container = styled.div`
    display: grid;
    margin: 10rem auto;
    max-width: 90rem;
    text-align: center;

    h1 {
        margin-bottom: 1rem;
        text-align: center;
    }

    h3 {
        margin-top: 0;
        text-align: center;
    }
`;