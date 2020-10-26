import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

// import InputTweet from '../../components/InputTweet/InputTweet';
// import TweetList from '../../components/TweetList/TweetList';
import CheckUser from '../../components/CheckUser/CheckUser';

class Home extends Component {


  render() {
    return (
      <div className="Home">
        <div className="Home__container">
          <h1>nyanstagram</h1>
          <p>登録して友達の写真や動画をチェックしよう</p>

          <CheckUser contentReverse={false}>
            <Link
              className="Home__link"
              to="/login"
            >ログイン</Link>
            <p>または</p>
            <Link
              className="Home__link"
              to="/signup"
            >メールドレスで登録</Link>
          </CheckUser>

        </div>
        <CheckUser />
      </div>
    )
  }

}

export default Home;
