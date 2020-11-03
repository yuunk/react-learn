import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';

// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

// class MyProfile

const MyProfile = () => {

  const authContext = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (authContext.mounted && !authContext.isLogin) {
      console.log('ok');
      history.push({
        pathname: '/'
      });
    }
  }, []);

  return (
    <ProfileBase myprofile={true} />
  );
}

export default MyProfile;