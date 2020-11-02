import React from 'react';
import { Link } from 'react-router-dom';

// style
import './NotLogin.scss';

const NotLogin = () => {

  return (
    <div className="NotLogin">
      <h1>nyanstagram</h1>
      <p>登録して友達の写真や動画をチェックしよう</p>
      <Link
        className="NotLogin__link"
        to="/login"
      >ログイン</Link>
      <p>または</p>
      <Link
        className="NotLogin__link"
        to="/signup"
      >メールドレスで登録</Link>
    </div>
  );
}

export default NotLogin;