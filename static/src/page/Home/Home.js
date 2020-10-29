import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';

// component
import Posts from '../../components/Posts/Posts';

// style
import './Home.scss';


class Home extends Component {

  static contextType = AuthContext;

  toggleContent = () => {
    
    if (this.context.isLogin) {
      return <Posts url='/api/post' />
    } else {
      return (
        <React.Fragment>
          <h1>nyanstagram</h1>
          <p>登録して友達の写真や動画をチェックしよう</p>
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
          {this.toggleContent()}
        </div>
      </div>
    )
  }

}

export default Home;
