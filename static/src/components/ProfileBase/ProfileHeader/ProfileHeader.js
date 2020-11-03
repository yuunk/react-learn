import React, { useContext } from 'react';

// context
import ProfileBaseContext from '../../../context/ProfileBaseContext';

// style
import './ProfileHeader.scss';

const ProfileHeader = (props) => {

  const profileBaseContext = useContext(ProfileBaseContext);

  const toggleHeader = (type) => {

    let content;
    console.log(props.type);

    switch (props.type) {
      case 'followPanel':
        content = followPanel();
        console.log('update panel');
        break;
      default:
        console.log('panel');
        break;
    }

    function followPanel() {
      return (
        <button onClick={() => { profileBaseContext.header.update('', false) }}>close</button>
      );
    }
      
    return content;

  }

  return (
    <div className="ProfileHeader">
      {toggleHeader()}
    </div>
  );
}

export default ProfileHeader;
// class HeaderProfile extends Component {

//     <div></div>
// }