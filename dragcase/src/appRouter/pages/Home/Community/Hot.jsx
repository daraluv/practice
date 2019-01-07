/**
 * 热门
 */
import React from 'react';
import Item from './item';
import { hots } from './config';

class Hot extends React.Component {
  componentDidMount() {
    document.title = '热门';
  }

  render() {
    return (
      <div className="flow_container">
        {hots.map((item, i) => (
          <Item to={`/detail/${item.id}`} title={item.title} author={item.auth} key={i} />
        ))}
      </div>
    )
  }
}

export default Hot;
