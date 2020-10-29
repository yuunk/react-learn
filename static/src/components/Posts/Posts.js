import React, { Component } from 'react';
import axios from 'axios';

// component
import PostChild from './PostChild/PostChild';

// style
import './Posts.scss';

class Posts extends Component {

  state = {
    posts: []
  }

  fetchPosts = (url) => {
    
    const token = localStorage.getItem('access_token');

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response);
      this.setState({ posts: response.data });
    }).catch(error => {
      console.log(error);
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
      <div className="Posts">
        {posts}
      </div>
    );
  }
}

export default Posts;