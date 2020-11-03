import React, { useContext } from 'react';
import axios from 'axios';

// context
import AuthContext from '../../context/AuthContext';
import ModalContext from '../../context/ModalContext';

// style
import './HomeHeader.scss';

const HomeHeader = () => {

  const authContext = useContext(AuthContext);

  const updateUserBtn = () => {
    if (authContext.isLogin) {
      return (
        <ModalContext.Consumer>
          {
            (context) =>
              <button
                onClick={(text, func) => context.open('ログアウトしますか？', logout)}
              >logout
              </button>
          }
        </ModalContext.Consumer>
      );
    }
  }

  const logout = () => {
    const token = localStorage.getItem('access_token');

    if (token !== null) {
      axios.get('/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          authContext.logout();
        })
        .catch(error => {
          console.log(error);
          this.props.history.push('/');
        });
    }
  }

  return (
    <div className="HomeHeader">
      <h1>instagram</h1>
      {updateUserBtn()}
    </div>
  );
}

export default HomeHeader;