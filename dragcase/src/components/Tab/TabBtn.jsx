import React, { Component } from 'react';
import TabController from './TabController.js';
import './style.css'


class TabBtn extends React.Component {
  constructor(props) {
    super(props);
    // this.titleArr = this.props.titleArr || [];
    // this.state = {
    //   inputVal: '',
    //   titleArr: this.titleArr,
    // };
  }

  
  render() {
    // console.log(this.props)
    return (
      <div className="btnGroup" onClick={this.props.changeHandler}>
        <button onClick={this.props.addHandle}>添加一页</button>
        <button onClick={this.props.removeHandle}>删除一页</button>
        <div>
           删除第<input type="tel" onChange={this.props.getinputVal}/>页
           <button onClick={this.props.setValueHandle}>确定</button>
        </div>
      </div>     
    )
  }
}




export default TabController(TabBtn);