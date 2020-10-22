import React, { Component } from 'react';
import './App.scss';

import InputTweet from './components/InputTweet/InputTweet';
import TweetList from './components/TweetList/TweetList';

class App extends Component {

  state = {
    tweet: {
      add: false,
      user: '',
      text: ''
    }
  }

  addTweet = (tweetText) => {
    console.log(tweetText);
    this.setState({
      tweet: {
        add: true,
        user: 'testUser',
        text: tweetText
      }
    });
  }

  resetAdd = () => {
    this.setState({
      tweet: {
        add: false,
        user: '',
        text: ''
      }
    });
  }

  render() {
    return (
      <div>
        <InputTweet click={(tweetText) => this.addTweet(tweetText)} />
        <TweetList addTweet={this.state.tweet} resetAdd={this.resetAdd} />
      </div>
    )
  }

}

export default App;
