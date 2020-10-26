import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './Modal.scss';

class Modal extends Component {

  logout = () => {
    const email = localStorage.getItem('email');

    axios
      .post('/api/user/logout', {
        'email': email
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      .then(response => {
        this.props.updateModal(false, '');
        localStorage.clear()
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    let modalStyle = 'Modal';

    if (this.props.show === true) {
      modalStyle += ' show';
    }

    return (
      <div className={modalStyle}>
        <div className="Modal__txt">ログアウトしますか</div>
        <button onClick={() => this.logout()}>yes</button>
        <button onClick={(show, type) => this.props.updateModal(false, 'logout')}>no</button>
      </div>
    )
  }

}

export default withRouter(Modal);
