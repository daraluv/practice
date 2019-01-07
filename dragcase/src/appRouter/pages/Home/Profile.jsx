/**
 * 我的
 */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Profile extends React.Component {
  componentDidMount() {
    document.title = '我的';
  }

  render() {
    return (
      <div className="container">
        <Link to="/">个人主页。点击进入其他页面</Link>
      </div>
    )
  }
}

export default Profile;
