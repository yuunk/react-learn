import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

// import InputTweet from '../../components/InputTweet/InputTweet';
// import TweetList from '../../components/TweetList/TweetList';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="Home__container">
          <h1>nyanstagram</h1>
          <p>登録して友達の写真や動画をチェックしよう</p>
          <button className="Home__loginBtn">ログイン</button>
          <p>または</p>
          <Link
            to="/signup"
          >メールドレスで登録</Link>
        </div>
      </div>
    )
  }

}

export default Home;