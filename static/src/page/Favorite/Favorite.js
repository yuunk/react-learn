import React, { Component } from 'react';

// components
import Posts from '../../components/PostList/PostList';

// style
import './Favorite.scss';


class Favorite extends Component {



  render() {
    return (
      <div className="Favorite">
        <h2 className="Favorite__pageTitle">お気に入り一覧</h2>
        <Posts url="/api/favorite/post" auth={true} />
      </div>
    );
  }
}

export default Favorite;