import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Connect extends React.Component {

    state = {
        leadership: []
    }

    componentWillMount() {
        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=Connect').then(data => {
            this.setState({
                leadership: data.data.posts.map((leader,index) => ({
                    id: leader.ID,
                    index,
                    name: leader.title,
                    headshot: leader.featured_image,
                    actionshot: leader.content.split('###</p>')[0].split('src="')[1].split('"')[0],
                    content: leader.content.split('###</p>')[1]
                }))
            });
        });

    }

    renderFaces() {

        return (
            this.state.leadership.map(leader =>
                <li key={leader.id}>
                    <Images odd={leader.index%2===1}>
                        <img src={leader.headshot} alt={leader.name} />
                        <img src={leader.actionshot} alt={leader.name} />
                    </Images>
                    <h2>{leader.name}</h2>
                    <p dangerouslySetInnerHTML={{__html: leader.content}} />
                </li>
            )
        )
    }

    render() {
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

const Images = styled.section`
    height: 30rem;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.odd ? 'row-reverse' : 'row'};

    img {
        display: block !important;
        max-height: 30rem !important;
        width: auto;
        margin: 0 !important;
    }
`;

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
                margin-bottom: 0;
            }

            p {
                margin-top: 0;
            }

            h3 {
                margin-top: 0;
                text-align: center;
            }
        }
    }
    
    h1 {
        margin-top: 0;
        margin-bottom: 5rem;
        text-align: center;
    }
`;