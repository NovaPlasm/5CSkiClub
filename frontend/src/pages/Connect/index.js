import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Connect extends React.Component {

    state = {
        leadership: []
    }

    componentWillMount() {
        // https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=Connect

        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=Connect').then(data => {
            this.setState({
                leadership: data.data.posts
            });
        });

    }

    renderFaces() {

        return (
            this.state.leadership.map(leader =>
                <li key={leader.ID}>
                    <img src={leader['featured_image']} alt={leader.title} />
                    <h2>{leader.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: leader.content}} />
                </li>
            )
        )
    }

    render() {

        console.log(this.state.leadership)
        return (
            <Div>
                <h1>Connect with our leadership</h1>
                <ul>
                    {this.renderFaces()}
                </ul>
            </Div>
        );
    }
}

const Div = styled.div`
    display: grid;
    max-width: 90rem;
    margin: 5rem auto 10rem auto;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            text-align: center;
            margin-bottom: 5rem;

            h3 {
                margin-top: 0;
                text-align: center;
            }

            img {
                margin: 0 auto;
                width: 15rem;
                height: 15rem;
                border-radius: 20rem;
            }
        }
    }
    
    h1 {
        margin-top: 0;
        margin-bottom: 5rem;
        text-align: center;
    }
`;