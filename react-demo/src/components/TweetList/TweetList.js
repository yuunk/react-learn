import React, { Component } from 'react';
import axios from 'axios';

import Tweet from './Tweet/Tweet';

import './TweetList.scss';

class TweetList extends Component {

    state = {
        tweetList: [],
    }

    static getDerivedStateFromProps(props, state) {
        if (props.addTweet.add) {
            const tweetList = [...state.tweetList];
            tweetList.push({ user: props.addTweet.user, text: props.addTweet.text });
            props.resetAdd();
            console.log('add');
            return {
                tweetList: tweetList
            };
        } else {
            return state;
        }
    }

    componentDidMount = () => {
        console.log('didmout');
        axios
            .get('/api/tweet')
            .then(response => {
                this.setState({ tweetList: response.data });
            })
            .catch(() => {
                console.log('axios faild');
            });
    }

    render() {

        console.log('update id = ' +  this.state.update);

        return (
            <ul className="TweetList">
                {this.state.tweetList.map((tweet, index) => {
                    return (
                        <Tweet
                            key={index}
                            user={tweet.user_id}
                            title={tweet.title}
                            text={tweet.text}
                        />
                    )
                })}
            </ul>
        )
    }

}

export default TweetList;
