import React from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../../../components/common';

export default class Create extends React.Component {
    render() {

        return (
            <>
                <Div>
                    <h1>Create your trips!</h1>
                    <ApplicationGrid>
                        <label>
                            Organizer
                            <Input type="text" />
                        </label>
                        <label>
                            Organizer School ID
                            <Input type="text" />
                        </label>
                        <label>
                            Location
                            <Input type="text" />
                        </label>
                        <label>
                            Slots (including yourself)
                            <Input type="text" />
                        </label>
                        <label>
                            Added cost
                            <Input type="text" />
                        </label>
                        <label>
                            Start Date
                            <Input type="date" />
                        </label>
                        <label>
                            End Date
                            <Input type="date" />
                        </label>
                    </ApplicationGrid>
                    <Button>Submit!</Button>
                </Div>
            </>
        );
    }
}

const ApplicationGrid = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 8rem;
    margin: 3rem auto;
    max-width: 60rem;
    width: 100%;

    label {
        align-self: center;

        input {
            width: 100%;
            font-family: inherit;
        }
    }
`;

const Div = styled.section`
    display: grid;
    max-width: 90rem;
    margin: 10rem auto;
    background-color: rgba(255,251,252,0.9);
    border-radius: 1rem;
    padding: 2rem 3rem 2rem 3rem;
    overflow: auto;

    h1 {
        margin-bottom: 1rem;
        margin-top: 0;
        text-align: center;
        position: sticky;
    }

    h3 {
        margin-top: 0;
        text-align: center;
    }

    table {
        width: 100%;
        tr {
            p {
                margin: 0;
            }

            th {
                text-align: left;
            }

            td {
                padding: 1rem 0;
            }
        }
    }
`;