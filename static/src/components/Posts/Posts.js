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

  fetchPosts = () => {
    
    const token = localStorage.getItem('access_token');

    axios.get('/api/post', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      this.setState({ posts: response.data });
    }).catch(error => {
      console.log(error);
    });

  }

  componentDidMount = () => {
    this.fetchPosts();
  }

  render() {

    let posts;

    if (this.state.posts) {
      posts = (
        <ul>
          {this.state.posts.map(post => {
            return (
              <PostChild
                key={post.id}
                id={post.id}
                title={post.title}
                name={post.name}
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