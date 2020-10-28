import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// context
import ModalContext from '../../context/ModalContext';

// style
import './Modal.scss';

class Modal extends Component {

  static contextType = ModalContext;

  logout = () => {
    const email = localStorage.getItem('email');

    axios
      .post('/api/auth/logout', {
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

    if (this.context.show === true) {
      modalStyle += ' show';
    }

    return (
      <div className={modalStyle}>
        <div className="Modal__txt">{this.context.text}</div>
        <button onClick={this.context.ok}>ok</button>
        <button onClick={this.context.cancel}>no</button>
      </div>
    )
  }

}

export default withRouter(Modal);
