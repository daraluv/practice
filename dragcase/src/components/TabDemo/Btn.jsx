import React from 'react';
import Tab from './Tab';

import './style.css';

class Btns extends React.Component {
  removeLast = () => {
    const { data, remove } = this.props;
    remove(data.length);
  }

  render() {
    const { data, currentIndex, remove, switchTo } = this.props;
    return (
      <div className="btns_container">
        {data.map((item, i) => (
          <button key={i} onClick={() => switchTo(i)}>{item}</button>
        ))}

        <button onClick={() => remove(data.length)}>删除最后一页</button>
      </div>
    )
  }
}

export default Btns;