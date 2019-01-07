/**
 * 新帖
 */
import React from 'react';
import Item from './item';
import { flows } from './config';

class Flow extends React.Component {
  componentDidMount() {
    document.title = '新帖';
  }

  render() {
    return (
      <div className="flow_container">
        {flows.map((item, i) => (
          <Item to={`/detail/${item.id}`} title={item.title} author={item.auth} key={i} />
        ))}
      </div>
    )
  }
}

export default Flow;
