import React from 'react';
import WithButton from './WithButton.js';

class Tab extends React.Component {
  render() {
    let {data, index, switchTo, remove} = this.props;
    
    return (
      <div className="tab_container">
        <ul className="tab_header">
          {data.map((item, i) => (
            <li key={i} className={index === i ? 'active' : ''}
             onClick={() => switchTo(i)}>{item}</li>
          ))}
        </ul>
        <div className="tab_content">{index}</div>
      </div>
    )
  }
}

export default WithButton(Tab);