import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';

// style
import './Home.scss';


class Home extends Component {

  static contextType = AuthContext;

  toggleContent = () => {
    if (!this.context.isLogin) {
      return (
        <React.Fragment>
          <Link
            className="Home__link"
            to="/login"
          >ログイン</Link>
          <p>または</p>
          <Link
            className="Home__link"
            to="/signup"
          >メールドレスで登録</Link>
        </React.Fragment>
      );
    }
  }


  render() {
    return (
      <div className="Home">
        <div className="Home__container">
          <h1>nyanstagram</h1>
          <p>登録して友達の写真や動画をチェックしよう</p>

          {this.toggleContent()}

        </div>
      </div>
    )
  }

}

export default Home;
