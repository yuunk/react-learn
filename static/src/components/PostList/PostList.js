import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// component
import PostChild from './PostChild/PostChild';

// style
import './PostList.scss';

class Posts extends Component {

  state = {
    posts: []
  }

  fetchPosts = (url) => {
    

    axios.get(url).then(response => {
      console.log(response);
      this.setState({ posts: response.data });
    }).catch(error => {
      if (error.response.status === 401) {
        this.props.history.push('/');
      }
    });

  }

  componentDidMount = () => {
    this.fetchPosts(this.props.url);
  }

  render() {

    let posts;

    if (this.state.posts.length > 0) {
      posts = (
        <ul>
          {this.state.posts.map(post => {
            return (
              <PostChild
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.updated_at.substr(0, 10)}
              />
            )
          })}  
        </ul>

      )
    }

    return (
      <div className="PostList">
        {posts}
      </div>
    );
  }
}

export default withRouter(Posts);