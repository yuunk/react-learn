import React, { Component } from 'react';
import './TweetList.scss';
import Tweet from './Tweet/Tweet';

class TweetList extends Component {

    state = {
        tweetList: [
            {
                user: 'user1',
                text: 'sample sample' 
            },
            {
                user: 'user2',
                text: 'sample sample sample'
            },
            {
                user: 'user3',
                text: 'sample sample sample'
            }
        ],
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

    render() {

        console.log('update id = ' +  this.state.update);

        return (
            <ul className="TweetList">
                {this.state.tweetList.map((tweet, index) => {
                    return (
                        <Tweet
                            key={index}
                            user={tweet.user}
                            text={tweet.text}
                        />
                    )
                })}
            </ul>
        )
    }

}

export default TweetList;
