import React, { Component } from 'react';
import axios from 'axios';

import './HttpTest.scss';


class HttpTest extends Component {

    state = {
        result: ''
    }

    hoge = () => {
        this.setState({ result: 'ok' });

        axios
            .get('/api/hoge')
            .then(response => {
                console.log(response);
            })
            .catch(() => {
                console.log('axios faild');
            });
    }

    render() {
        return (
            <div className="HttpTest">
                <button onClick={this.hoge}>request</button>
                <div>{this.state.result}</div>
            </div>
        );
    }
}

export default HttpTest;