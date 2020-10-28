import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context
import Modalcontext from '../context/ModalContext';

// components
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';

// page
import Home from '../page/Home/Home';
import Signup from '../page/Signup/Signup';
import Login from '../page/Login/Login';


class ModalContainer extends Component {

  state = {
    show: false,
    text: '',
    clickOk: () => { },
  }

  open = (text, func) => {
    this.setState({ show: true });
    this.setState({ text: text });
    this.setState({
      clickOk: () => {
        func();
        this.setState({ show: false });
    }});
  }

  clickOk = (func) => {
    // func();
    this.setState({ show: false });
  }

  clickCancel = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <BrowserRouter>
        <Modalcontext.Provider
          value={{
            show: this.state.show,
            text: this.state.text,
            open: this.open,
            ok: this.state.clickOk,
            cancel: this.clickCancel
          }}
        >

          <Modal />

          <Header updateModal={(show, type) => this.updateModal(show, type)} />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} setToken={(token) => this.setToken(token)} />
          </Switch>

        </Modalcontext.Provider>
      </BrowserRouter>
    );
  }


}

export default ModalContainer;