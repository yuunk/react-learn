import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';
import HeaderContext from '../../context/HeaderContext';

// component
import Posts from '../../components/PostList/PostList';

// style
import './Home.scss';


class Home extends Component {

  static contextType = HeaderContext;

  // static contextType = AuthContext;
  // state = {
  //   isLogin: false;
  // }

  // toggleContent = (isLogin) => {
  //   console.log(isLogin);
  //   if (isLogin) {
  //     return <Posts url='/api/post' />
  //   } else {
  //     return (
  //       <React.Fragment>
  //         <h1>nyanstagram</h1>
  //         <p>登録して友達の写真や動画をチェックしよう</p>
  //         <Link
  //           className="Home__link"
  //           to="/login"
  //         >ログイン</Link>
  //         <p>または</p>
  //         <Link
  //           className="Home__link"
  //           to="/signup"
  //         >メールドレスで登録</Link>
  //       </React.Fragment>
  //     );
  //   }

  // }

  componentDidMount = () => {
    this.context.update('home');
  }


  render() {

    let isLogin;

    return (
      <div className="Home">
        <div className="Home__container">
          <AuthContext.Consumer>
            {(context) => {
              if (context.isLogin) {
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
            }}
          </AuthContext.Consumer>
        </div>
      </div>
    )
  }

}

export default Home;
