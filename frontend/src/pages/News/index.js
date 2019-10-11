import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class News extends React.Component {

    state = {
        news: []
    }

    componentWillMount() {
        // https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=News

        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=News').then(data => {
            this.setState({
                news: data.data.posts
            });
        });
    }

    renderLeaders() {

        return (
            this.state.news.map(post =>
                <li key={post.ID}>
                    <h2>{post.title}</h2>
                    <p className="date" dangerouslySetInnerHTML={{__html: `${new Date(post.date).toLocaleDateString("en-US")}`}} />
                    <p dangerouslySetInnerHTML={{__html: post.content}} />
                </li>
            )
        )
    }

    render() {

        return (
            <Div>
                <h1>Latest Lines News</h1>
                <ul>
                    {this.renderLeaders()}
                </ul>
            </Div>
        );
    }
}

const Div = styled.div`
    display: grid;
    max-width: 90rem;
    margin: 7rem auto 0 auto;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            text-align: center;
            margin-bottom: 5rem;

            h2 {
                text-align: left;
                margin-bottom: 0;
            }

            p {
                text-align: left;

                &.date {
                    font-style: italic;
                    margin-top: 0
                }
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
        margin-bottom: 0;
        text-align: center;
    }
`;