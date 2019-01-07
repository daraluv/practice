/**
 * 子项
 */
import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.css';

class Flow extends React.Component {
  componentDidMount() {
    document.title = '新帖';
  }

  navToDetail = () => {
    const { history, to, title, author } = this.props;
    history.push(to, {
      title,
      author
    });
  }

  render() {
    const { title, author } = this.props;
    /**
     * 可以直接使用Link来实现，这里只是为了演示withRouter的作用
     */
    return (
      <div className="item_container" onClick={this.navToDetail}>
        <h1>{title}</h1>
        <p>{author}</p>
      </div>
    )
  }
}

export default withRouter(Flow);
