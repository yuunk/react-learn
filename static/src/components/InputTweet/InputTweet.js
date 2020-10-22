import React, { Component } from 'react';

import './InputTweet.scss';


class InputTweet extends Component {

    clickedTweet = () => {
        console.log('clicked');
        if (this.textareaInput.value === '') {
            alert('empty');
        } else {
            this.props.click(this.textareaInput.value);
        }
    }

    render() {
        return (
            <div className="InputTweet">
                <textarea
                    ref={input => { this.textareaInput = input }}
                    className="InputTweet__textArea"
                    type="text"
                    name="tweet"
                />
                <button
                    onClick={this.clickedTweet}
                    className="InputTweet__button"
                    type="button"
                >
                    Tweet
            </button>
            </div>
        );
    }
}

export default InputTweet;