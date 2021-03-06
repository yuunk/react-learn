import React from 'react';
import { Link } from 'react-router-dom';


// style
import './MenuBar.scss';

// icon
import { ReactComponent as IconHome } from '../../assets/img/icon/home.svg';
import { ReactComponent as IconSearch } from '../../assets/img/icon/search.svg';
import { ReactComponent as IconPlus } from '../../assets/img/icon/plus.svg';
import { ReactComponent as IconFavorite } from '../../assets/img/icon/star-full.svg';
import { ReactComponent as IconUser } from '../../assets/img/icon/user.svg';

const menuBar = () => {

  return (
    <nav className="MenuBar">
      <ul>
        <li>
          <button>
            <Link to="/">
              <IconHome />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <IconSearch />
          </button>
        </li>
        <li>
          <button>
            <Link to="/post">
              <IconPlus />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/favorite">
              <IconFavorite className="MenuBar__favorite" />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/myprofile">
              <IconUser />
            </Link>
          </button>
        </li>
      </ul>
    </nav>     
  )
}

export default menuBar;