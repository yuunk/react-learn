import React, { Component } from 'react';
import './Tweet.scss';

class Tweet extends Component {

    render() {
        return (
            <li className="Tweet">
                <div className="Tweet__icon">icon</div>
                <div className="Tweet__containerLeft">
                    <div>{this.props.user}</div>
                    <div>{this.props.text}</div>
                    <button>♡</button>
                </div>
            </li>
        )
    }

}

export default Tweet;
