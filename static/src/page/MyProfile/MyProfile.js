import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

const MyProfile = () => {

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
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