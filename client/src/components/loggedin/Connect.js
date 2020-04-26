import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { GridContainer, GridItem } from "../common/Grid";
import { Card, CardBody, CardHeader } from "../common/Card";

const hardCoded = {"posts":[{id:62,name:"Kirill Myagkov",actionshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/kirillski-1.jpg",content:"<p>President,<br>Ski Racing Coach<br>kirill.myagkov@pomona.edu</p>\n", headshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/kirill.jpg"},{id:59,name:"Evan Flitz",actionshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/evan.png?w=646",content:"<p>VP of Club Operations & Recreation,<br>Dryland Coach<br>evan.flitz@pomona.edu</p>\n", headshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/evanhead.jpg"},{id:58,name:"Jacob Al-Husseini",actionshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/jacob.png?w=523",content:"<p>VP of Club Development,<br>Snowboard/Freestyle Team Coach<br>jacob.al-husseini@pomona.edu</p>\n", headshot:"https://5cskisnowboardhome.files.wordpress.com/2019/10/jacobhead.jpg"}]};

export default class Connect extends React.Component {
  state = {
    leadership: []
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=Connect',
      headers: {
        'content-type': 'application/json',
        'Authorization': null,
      }
    }).then(data => {
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
            <img className="headshot" src={leader.headshot} alt={leader.name} />
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader>
              <h4>Connect with our leadership</h4>
            </CardHeader>
            <CardBody>
              <Ul>
                {this.renderFaces()}
              </Ul>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

const Images = styled.section`
  height: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: ${props => props.odd ? 'row-reverse' : 'row'};
  @media only screen and (max-width: 52em) {
    flex-direction: column;
  }

  img {
    display: block !important;
    max-height: 20rem !important;
    max-width: 100%;
    width: auto;
    margin: 0 !important;

    @media only screen and (max-width: 52em) {
      margin: 0 auto !important;
      max-height: 50% !important;

      &.headshot {
        border-radius: 50rem;
      }
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

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
`;