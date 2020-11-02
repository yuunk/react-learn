import axios from 'axios';
import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router";

// context
import AuthContext from '../../context/AuthContext';
import ModalContext from '../../context/ModalContext';
import HeaderContext from '../../context/HeaderContext';
// import 

// function


import './Header.scss';

import { ReactComponent as IconCamera } from '../../assets/img/icon/camera.svg';

const Header = (props) => {

  const history = useHistory();

  const headerContext = useContext(HeaderContext);

  const logout = () => {
    const token = localStorage.getItem('access_token');

    if (token !== null) {
      axios.get('/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          if (response.status === 200 && response.data) {
            // this.props.history.push('/');
            history.push({
              pathname: '/'
            });
            // this.context.logout();
          }
        })
        .catch(error => {
          console.log(error);
          this.props.history.push('/');
        });
    } else {
      this.props.history.push('/');
    }
  }

  const updateBtns = (element) => {

    let buttons;

    switch (headerContext.type) {
      case 'home':
        buttons = home();
        break;
      case 'followPanel':
        buttons = followPanel();
        break;
    }

    return buttons;


    function home() {
      return (
        <div className="Header__home">
          <IconCamera />
        </div>
      );
    }

    function followPanel() {
      return (
        <div className="Header__followPanel">
          <button>close</button>
        </div>
      )
    }
  }

  return (
    <div className="Header">
      {updateBtns()}
      <ModalContext.Consumer>
        {
          (context) =>
            <button
              onClick={(text, func) => context.open('ログアウトしますか', logout)}
            >logout
            </button>
        }
      </ModalContext.Consumer>
    </div>
  );
}

export default Header;

// class Header extends Component {

//   static contextType = AuthContext;

//   logout = () => {

//   }

//   updateNav = () => {
//     switch (this.props.type) {
//       'home'
//     }
//   }

//   // updateNav = () => {
//   //   if (this.context.isLogin) {
//   //     return (
//   //       <React.Fragment>

//   //         <ModalContext.Consumer>
//   //           {
//   //             (context) =>
//   //               <button
//   //                 onClick={(text, func) => context.open('ログアウトしますか', this.logout)}
//   //               >logout
//   //               </button>
//   //           }
//   //         </ModalContext.Consumer>
//   //       </React.Fragment>
//   //     );
//   //   } else {
//   //     return (
//   //       <React.Fragment>
//   //         <Link
//   //           to="/"
//   //         >Home</Link>
//   //         <Link
//   //           to="/signup"
//   //         >signup</Link>
//   //       </React.Fragment>
//   //     )
//   //   }
//   // }
  
//   componentDidMount = () => {
//   }


//   render() {

//     return (
//       <header className="Header">
//         <nav className="Header__nav">
//           {this.updateNav()}
//         </nav>
//       </header>
//     );
//   }
// }

// export default withRouter(Header);