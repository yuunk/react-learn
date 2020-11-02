import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// component
import FavoriteButton from '../../../components/FavoriteButton/FavoriteButton';

// style
import './PostSingle.scss';


class PostSingle extends Component {

  state = {
    post: {
      userId: '',
      userName: '',
      title: '',
      text: '',
      updated_at: ''
    },
    fetchDone: false,
    id: 0,
    profileUrl: ''
  }

  fetchPost = () => {

    const requestApi = '/api/post/' + this.props.match.params.id;
    this.setState({ id: this.props.match.params.id });
    const token = localStorage.getItem('access_token');

    axios.get(requestApi, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
        console.log(response);
        const post = response.data.post;
        let profileUrl = '';

        if (response.data.isMine) {
          profileUrl = '/myprofile';
        } else {
          profileUrl = '/profile/' + post.id;
        }

        this.setState({
          post: {
            userId: post.id,
            userName: post.name,
            title: post.title,
            text: post.text,
            updated_at: post.updated_at.substr(0, 10),
          },
          fetchDone: true,
          profileUrl: profileUrl
        });
        
      }).catch(error => {
        console.log(error);
      });
  }

  updateFavorite = () => {
    console.log('ok');
  }

  getContent = () => {
    return (
      <React.Fragment>
        <h2 className="PostSingle__title">{this.state.post.title}</h2>
        <p className="PostSingle__text">{this.state.post.text}</p>
        <Link to={this.state.profileUrl}
          className="PostSingle__user"
        >
          {this.state.post.userName}@{this.state.post.updated_at}
        </Link>
        <div className="PostSingle__buttons">
          <FavoriteButton postId={this.state.id} />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
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