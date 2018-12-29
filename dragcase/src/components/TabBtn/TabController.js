import React, { Component } from 'react';

const TabController  = (BaseComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
       title: 'hoc-component',
      }
    }

    render() {
      return <BaseComponent {...this.props}/>
    }
  }

}
export default TabController;

// 闭包、父组件
// 数据共享、公共逻辑