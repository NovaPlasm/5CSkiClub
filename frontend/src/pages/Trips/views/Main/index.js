import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Button, Input } from '../../../../common';
import filterIcon from '../../../../assets/filter-icon.png';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            filters: {
                organizer: 'Beau Taylor-Ladd',
                location: 'Mt. Hood'
            },
            popup: ''
        };
    }

    getQuery() {
        const { organizer = '', location = '' } = this.state.filters;
        let filter = '';

        if (organizer !== '') {
            filter += `organizer: "${organizer}"`
            if (location !== '') filter += `, location: "${location}"`;
        } else if (location !== '') filter += `location: "${location}"`
            

        return gql`
            {
                tripsSearch${filter === '' ? ''  :`(${filter})`} {
                    id
                    organizer
                    location
                    maxSlots
                    occupiedSlots
                    startDate
                    endDate
                }
            }
        `;
    }

    renderTable(data) {
        return data.tripsSearch.map(item => (
            <tr key={item.id}>
                <td><p>{item.organizer}</p></td>
                <td><p>{item.location}</p></td>
                <td><p>{`${item.occupiedSlots}/${item.maxSlots}`}</p></td>
                <td><Button>Join!</Button></td>
            </tr>
        ));
    }

    renderPopup(type) {
        const { popup } = this.state;

        if (type === popup) {
            return (
                <Popup>
                    <p>{`Filter ${type}s by:`}</p>
                    <Input type="text" value={this.state.filters[type]} onChange={e => this.setState({filters: {[type]: e.target.value}})}></Input>
                    <button onClick={() => this.setState({popup: ''})}>X</button>
                </Popup>
            );
        }
    }

    render() {

        return (
            <>
                <Div>
                    <h1>Register and Join Trips</h1>
                    <h3>Want to make or edit your own trip?  <Link to="/trips/create">Click here!</Link></h3>
                    <Scrollbars
                    style={{ height: 400 }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <p>Organizer</p>
                                        <img src={filterIcon} alt="filter" onClick={() => this.setState({popup: 'organizer'})} />
                                        {this.renderPopup('organizer')}
                                    </th>
                                    <th>
                                        <p>Location</p>
                                        <img src={filterIcon} alt="filter" onClick={() => this.setState({popup: 'location'})} />
                                        {this.renderPopup('location')}
                                    </th>
                                    <th><p>Slots</p></th>
                                    <th><p></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Query query={this.getQuery()}>
                                    {({ loading, error, data }) => {
                                        if (loading) {
                                            return null;
                                        }
                                        if (error) return <tr><td><p>{`Error! ${error}`}</p></td></tr>;
                                        return this.renderTable(data);
                                    }}
                                </Query>
                            </tbody>
                        </table>
                    </Scrollbars>
                </Div>
            </>
        );
    }
}

const Popup = styled.div`
    position: absolute;
    width: 18rem;
    height: 7rem;
    top: 0;
    left: 12rem;
    background: ${props => props.theme.white};
    border-radius: 1rem;
    padding: 1.5rem;
    z-index: 2;

    button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        border-radius: 10rem;
        font-weight: bold;
    }

    p {
        padding-bottom: 1rem;
    }
`;

const Div = styled.section`
    display: grid;
    max-width: 90rem;
    margin: 10rem auto;
    background-color: rgba(255,251,252,0.9);
    border-radius: 1rem;
    padding: 2rem 1rem 2rem 3rem;
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
                position: relative;

                img,p {
                    display: inline-block;
                }

                img {
                    height: 1.6rem;
                    margin-left: 1rem;
                }
            }

            td {
                padding: 1rem 0;
            }
        }
    }
`;