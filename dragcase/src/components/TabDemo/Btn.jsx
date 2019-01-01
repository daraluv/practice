import React from 'react';

import './style.css';

class Btns extends React.Component {
  render() {
    const { data, remove, switchTo } = this.props;
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