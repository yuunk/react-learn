import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// context
import AuthContext from './context/AuthContext';

// components
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

// page
import Home from './page/Home/Home';
import Signup from './page/Signup/Signup';
import Login from './page/Login/Login';

// style
import './App.scss';

class App extends Component {

  state = {
    modal: {
      show: false,
      type: ''
    },
    isLogin: false,
  }

  login = () => {
    this.setState({ isLogin: true });
  }

  authUser = () => {

    const token = localStorage.getItem('access_token');

    if (token !== null) {
      axios.
        get('/api/auth/user', {
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

  updateModal = (show, type) => {
    this.setState({
      modal: {
        show: show,
        type: type
      }
    });
    console.log('ok');
  }

  componentDidMount = () => { 
    this.authUser();
  }


  render() {

    return (

      <BrowserRouter>
        <div>
          <AuthContext.Provider
            value={{
              isLogin: this.state.isLogin,
              login: this.login
            }}
          >

            <Modal
              show={this.state.modal.show}
              type={this.state.modal.type}
              updateModal={(show, type) => this.updateModal(show, type)}
            />

            <Header updateModal={(show, type) => this.updateModal(show, type)} />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} setToken={(token) => this.setToken(token)} />
            </Switch>

          </AuthContext.Provider>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
