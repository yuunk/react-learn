import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context
import Modalcontext from '../context/ModalContext';

// components
import MenuBar from '../components/MenuBar/MenuBar';
import Modal from '../components/Modal/Modal';

// page
import Home from '../page/Home/Home';
import Signup from '../page/Signup/Signup';
import Login from '../page/Login/Login';
import Post from '../page/Post/Post';
import PostSingle from '../page/Post/PostSingle/PostSingle';
import Favorite from '../page/Favorite/Favorite';
import MyProfile from '../page/MyProfile/MyProfile';
import PagePosts from '../page/Posts/PagePosts';
import Profile from '../page/Profile/Profile';


class AppContainer extends Component {

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

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} setToken={(token) => this.setToken(token)} />
              <Route path='/post/:id' component={PostSingle} />
              <Route path='/post' component={Post} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/profile/:id' component={Profile} />
              <Route path='/myprofile' component={MyProfile} />
              <Route path='/posts/:id' component={PagePosts} />
            </Switch>

            <MenuBar />

          </Modalcontext.Provider>

      </BrowserRouter>
    );
  }


}

export default AppContainer;