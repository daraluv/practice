import React from 'react';
import withButton from './withButton';

class Tab extends React.Component {
  render() {
    const { index, data, switchTo } = this.props;
    return (
      <div className="tab_container">
        <ul className="tab_header">
          {data.map((item, i) => (
            <li key={i} className={index === i ? 'active' : ''} onClick={() => switchTo(i)}>{item}</li>
          ))}
        </ul>
        <div className="tab_content">{index}</div>
      </div>
    )
  }
}

/** 通过执行这一句往Tab组件中注入props */
export default withButton(Tab);