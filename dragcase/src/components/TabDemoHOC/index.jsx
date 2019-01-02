import React from 'react';
import Tab from './Tab';
import Btn from './Btn';

import './style.css';

class TabDemo extends React.Component {
  render() {
    return (
      <div className="container">
        <Tab />
        <Btn />
      </div>
    )
  }
}

export default TabDemo;