import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";

// context
import AuthContext from '../../context/AuthContext';

// import 

// style
import './HomeHeader.scss';

const HomeHeader = () => {

  const authContext = useContext(AuthContext);

  const history = useHistory();

  const updateUserBtn = () => {
    if (authContext.isLogin) {
      return <button onClick={logout}>logout</button>
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
          console.log(response);
          // if (response.status === 200) {
          //   // this.props.history.push('/');
          //   history.push({
          //     pathname: '/'
          //   });
          //   // this.context.logout();
          // }
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