import React, { Component } from 'react';
import TabController from './TabController.js';
import './style.css'

class Tab extends React.Component {
  constructor(props) {
    super(props);
    // this.titleArr = this.props.titles || [];
    // this.contentArr = this.props.contents || [];
  }

  
  render() {
    const {titleArr,contentArr} = this.props.data
    console.log('111',this.props)

    return (
        <div className="tabContainer">    
          <ul className="tabNav">
              {
                titleArr.map((item,i) =>
                  <li onClick={() => this.props.setCurrent(i)} className={this.props.data.current === i ? 'title active' : 'title'} key={i}>
                    {item}
                  </li>
                )
              }
          </ul>
          <div className="tabContent">
              {
                contentArr.map((item,i) =>
                  <div onClick={() => this.props.setCurrent(i)} className={this.props.current === i ? 'contentItem active' : 'contentItem'} key={i}>
                    {item}
                  </div>
                )
              }
          </div>
      </div>
    )
  }
}


export default TabController(Tab);