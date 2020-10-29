import React, { Component } from 'react';
import axios from 'axios';

// style
import './PostSingle.scss';

class PostSingle extends Component {

  state = {
    post: {
      userName: '',
      title: '',
      text: '',
      updated_at: ''
    },
    fetchDone: false
  }

  fetchPost = () => {

    const requestApi = '/api/post/' + this.props.match.params.id;

    axios.get(requestApi)
      .then(response => {
        const post = response.data;
        this.setState({
          post: {
            userName: post.name,
            title: post.title,
            text: post.text,
            updated_at: post.updated_at.substr(0, 10)
          }
        });
        this.setState({ fetchDone: true });
      }).catch(error => {
        console.log(error);
      });
  }

  getContent() {
    return (
      <React.Fragment>
        <h2 className="PostSingle__title">{this.state.post.title}</h2>
        <p className="PostSingle__text">{this.state.post.text}</p>
        <div className="PostSingle__user">{this.state.post.userName}@{this.state.post.updated_at}</div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    console.log();
    let content;

    if (this.state.fetchDone) {
      content = this.getContent();
    }

    return (
      <div className="PostSingle">
        {content}
      </div>
    )
  }
}

export default PostSingle;