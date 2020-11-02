import React, { useContext, useState } from 'react';

// context
import AuthContext from '../../context/AuthContext';

// component
import HomeHeader from '../../components/Header/HomeHeader';
import Posts from '../../components/PostList/PostList';
import NotLogin from '../../components/NotLogin/NotLogin';

// style
import './Home.scss';

const Home = () => {

  const authContext = useContext(AuthContext);

  const [showPost, setShowPost] = useState(false);

  const updateContent = () => {
    if (authContext.isLogin || showPost) {
      return <Posts url='/api/post' />;
    } else {
      return (
        <React.Fragment>
          <NotLogin />
          <button className="Home__showPost" onClick={()=> setShowPost(true)}>投稿を見る</button>
        </React.Fragment>
      );
    }
  }

  return (
    <div className="Home">
      <HomeHeader />
      <div className="Home__container">
        {updateContent()}
      </div>
    </div>
  );
}

export default Home;
