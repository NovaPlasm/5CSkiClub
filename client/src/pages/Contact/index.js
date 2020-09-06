import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Contact extends React.Component {

    state = {
        contact: []
    }

    componentWillMount() {
        const { type } = this.props.match.params;
        axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=${type}`).then(data => {
            this.setState({
                contact: data.data.posts.map((page) => ({
                    id: page.ID,
                    content: page.content,
                    title: page.title
                }))
            });
        });
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.type !== oldProps.match.params.type) {
            const { type } = this.props.match.params;
            axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=${type}`).then(data => {
                this.setState({
                    contact: data.data.posts.map((page) => ({
                        id: page.ID,
                        content: page.content,
                        title: page.title
                    }))
                });
            });
        }
    }

    render() {
        const { contact } = this.state;

        if (contact.length === 0) return null;

        return (
            <Div>
                <h1>{contact[0].title}</h1>
                <p dangerouslySetInnerHTML={{__html: contact[0].content}} />
            </Div>
        );
    }
}

const Div = styled.div`
    display: grid;
    max-width: 90rem;
    margin: 7rem auto 0 auto;
    padding: 0 2.7rem;

    @media only screen and (max-width: 48em) {
        max-width: 100%;
    }

    h1 {
        margin-bottom: 1rem;
        margin-top: 0;
        text-align: center;
    }

    h3 {
        margin-top: 0;
        text-align: center;
    }

    figure {
        img {
            max-height: none !important;
            max-width: 100%;
        }
        &.aligncenter {
            figcaption {
                text-align: center;
                font-style: italic;
            }
        }
    }
`;