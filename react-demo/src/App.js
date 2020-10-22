import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';

// page
import Home from './page/Home/Home';
import Signup from './page/Signup/Signup';

class App extends Component {



  render() {
    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
