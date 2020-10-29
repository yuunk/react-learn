import React, { Component } from 'react';
import axios from 'axios';

// style
import './FavoriteButton.scss';

// icon
import { ReactComponent as IconFavorite } from '../../assets/img/icon/star-full.svg';

class FavoriteButton extends Component {

  state = {
    isFavorite: false,
    buttonClass: 'FavoriteButton'
  }

  updateFavorite = (url) => {
    const token = localStorage.getItem('access_token');

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response);
      this.updateState(response.data)
    }).catch(error => {
      console.log(error);
    });
  }

  updateState = (response) => {
    if (response) {
      this.setState({ isFavorite: true });
      this.setState({ buttonClass: this.state.buttonClass + ' -active' });

    } else {
      this.setState({ isFavorite: false, buttonClass: 'FavoriteButton' });
    }
  }

  componentDidMount = () => {
    this.updateFavorite('/api/favorite/fetch/' + this.props.postId)
  }

  render() {
    return (
      <button
        className={this.state.buttonClass}
        onClick={() => { this.updateFavorite('/api/favorite/' + this.props.postId) }}
      >
        <IconFavorite />
      </button>
    );
  }
}

// const favoriteButton = (props) => {

//   const updateFavorite = () => {

//     const token = localStorage.getItem('access_token');

//     axios.get('/api/favorite/' + props.postId, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//     }).then(response => {
//       console.log(response);
//     }).catch(error => {
//       console.log(error);
//     });
    
//   }

//   return (
//     <button className="FavoriteButton" onClick={updateFavorite}>
//       <IconFavorite />
//     </button>
//   );
// }

export default FavoriteButton;