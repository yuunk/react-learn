import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';

// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

const MyProfile = () => {

  const authContext = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (!authContext.isLogin) {
      history.push({
        pathname: '/'
      });
    }
  });

  return (
    <ProfileBase myprofile={true} />
  );
}

export default MyProfile;