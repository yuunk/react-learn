import React, { Component } from 'react';

// component
import Posts from '../../components/PostList/PostList';

class PagePosts extends Component {

  render() {
    return (
      <div className="Posts">
        <Posts url={'/api/posts/' + this.props.match.params.id} />
      </div>
    );
  }

}

export default PagePosts;