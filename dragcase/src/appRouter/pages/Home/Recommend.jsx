/**
 * 推荐
 */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Recommend extends React.Component {
  componentDidMount() {
    document.title = '推荐';
  }

  render() {
    return (
      <div className="container">
        <Link to="/">推荐页。点击进入其他页面</Link>
      </div>
    )
  }
}

export default Recommend;
