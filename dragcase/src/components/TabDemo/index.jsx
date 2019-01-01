import React, { Component } from 'react';
import Tab from './Tab';
import Btn from './Btn';
import WithButton from './WithButton.js';

import './style.css';

class TabDemo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {data, switchTo, remove} = this.props;
    return (
      <div className="container">
        <Tab data={data.data} index={data.currentIndex} switchTo={switchTo} />
        <Btn data={data.data} index={data.currentIndex} switchTo={switchTo} remove={remove} />      
      </div>
    )
  }
}

export default WithButton(TabDemo);