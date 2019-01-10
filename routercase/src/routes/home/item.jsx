/**
 * 子项
 */
import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class Item extends React.Component {
  componentDidMount() {
    document.title = '新帖';
  }

  navToDetail = () => {
    const {  to, title, author } = this.props;

  }

  render() {
    const { to, title, author } = this.props;
    
    return (
      <div className="item_container" >
        <Link to={{
              pathname: to,
              state: {
                title,
                author
              }
            }}>
          <h1>{title}</h1>
          <p>{author}</p>
        </Link>
      </div>
    )
  }
}

export default Item;
