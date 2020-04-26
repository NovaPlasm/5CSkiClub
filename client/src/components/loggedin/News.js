import React from "react";
import axios from "axios";

import { GridContainer, GridItem } from "../common/Grid";
import { Card, CardBody, CardHeader } from "../common/Card";

const hardCoded = {posts:[{"ID":78,"date":"2019-10-11T17:41:55-07:00","title":"The Collective Tonight!","content":"<p>Make sure you stop by to learn some info about the club, and watch a dope movie!</p>\n","excerpt":"<p>Make sure you stop by to learn some info about the club, and watch a dope movie!</p>\n"},{"ID":79,"date":"2020-02-01T17:41:55-07:00","title":"Another blog post!", content:"<p>More news!</p>\n<b>It has styles too!</b>"}]};


export default class News extends React.Component {

  state = {
    news: hardCoded.posts
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'https://public-api.wordpress.com/rest/v1.1/sites/5cskisnowboard.home.blog/posts/?category=News',
      headers: {
        'content-type': 'application/json',
        'Authorization': null,
      }
    }).then(data => {
      this.setState({
        news: data.data.posts
      });
    });
  }

  render() {

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          {
            this.state.news.map(post =>
              <Card key={post.ID}>
                <CardHeader color="primary">
                  <h4>{post.title}</h4>
                  <p className="date" dangerouslySetInnerHTML={{__html: `${new Date(post.date).toLocaleDateString("en-US")}`}} />
                </CardHeader>
                <CardBody>
                  <p dangerouslySetInnerHTML={{__html: post.content}} />
                </CardBody>
              </Card>
            )
          }
        </GridItem>
      </GridContainer>
    );
  };
}