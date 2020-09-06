import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

export default class Home extends React.Component {

    render() {

        return (
            <Div>
              <RegisterSection>
                    <Link to="/login">
                        <Button
                            variant="contained"
                            color="primary"
                            className="submit"
                            >
                            Sign In To Access All Features!
                        </Button>
                    </Link>
                </RegisterSection>
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
        text-color:white;
        margin-bottom: 1rem;
        margin-top: 0;
        text-align: center;
    }

    h3 {
        text-color:white;
        margin-top: 0;
        text-align: center;
    }
`;

const RegisterSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    justify-content: center;

    a {
        color: #000;
    }
`;