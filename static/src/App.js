import React, { Component } from 'react';
import axios from 'axios';

// container
import ModalContainer from './container/ModalContainer';

// context
import AuthContext from './context/AuthContext';

// style
import './App.scss';


class App extends Component {

  state = {
    isLogin: false,
  }

  login = () => {
    this.setState({ isLogin: true });
  }

  logout = () => {
    this.setState({ isLogin: false });

  }

  authUser = () => {

    const token = localStorage.getItem('access_token');

    if (token !== null) {
      axios.get('/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then(response => {
          if (response.status === 200 && response.data) {
            this.login();
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('no token');
    }

  }

  componentDidMount = () => { 
    this.authUser();
  }


  render() {

    return (

      <div className="App">
        <AuthContext.Provider
          value={{
            isLogin: this.state.isLogin,
            login: this.login,
            logout: this.logout
          }}
        >
          <ModalContainer />

        </AuthContext.Provider>
      </div>
    )
  }

}

export default App;
