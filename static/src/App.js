import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

// page
import Home from './page/Home/Home';
import Signup from './page/Signup/Signup';
import Login from './page/Login/Login';

class App extends Component {

  state = {
    modal: {
      show: false,
      type: ''
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

  render() {
    return (

      <BrowserRouter>
        <div>
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
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
