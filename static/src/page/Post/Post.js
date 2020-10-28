import React, { Component } from 'react';
import axios from 'axios';

// style
import './Post.scss';
import './PostForm.scss';

class Post extends Component {

  state = {
    errorMsg: {

    }
  }

  postSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('title', event.target.title.value);
    formData.append('text', event.target.text.value);

    const token = localStorage.getItem('access_token');

    axios.post('/api/post', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data',
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
    
  }

  render() {
    return (
      <div className="Post">
        <h2 className="Post__pageTtl">投稿</h2>
        <form
          className="PostForm"
          onSubmit={this.postSubmit}
          method="post"
          name="postForm"
          action=""
        >
          <div className="PostForm__row">
            <label className="PostForm__label">タイトル</label>
            <input className="PostForm__input" type="text" name="title" />
          </div>
          <div className="PostForm__row">
            <label className="PostForm__label">本文</label>
            <textarea name="text"></textarea>
          </div>
          <button
            className="PostForm__button"
            type="submit">保存</button>
        </form>
      </div>
    );
  }

}

export default Post;