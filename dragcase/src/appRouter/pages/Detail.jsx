/**
 * 帖子详情内容
 */
import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  componentDidMount() {
    document.title = '帖子标题';
  }

  render() {
    return (
      <div className="det_container">
        <Link to="/">这里是帖子内容</Link>
      </div>
    )
  }
}

export default Detail;
