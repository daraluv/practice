import React from 'react';
// import classnames from 'classnames';
import './style.css'
import TabBtn from '../TabBtn';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.titleArr = this.props.titles || [];
    this.contentArr = this.props.contents || [];
    this.state = {
      current: 0,
      titleArr: this.titleArr,
      contentArr: this.contentArr 
    };
  }

  changeHandler() {
    this.setState({
      titleArr: this.titleArr,
    });
  }

  setNav = (index) => {
    return index === this.state.current ? 'title active' : 'title';
  }

  setContent = (index) => {
    return index === this.state.current ? 'contentItem active' : 'contentItem';
  }

  render() {
    return (
        <div className="tabContainer">
          <ul className="tabNav">
              {
                this.titleArr.map((item,i) =>
                  <li onClick={() => {this.setState({ current:i })}} className={this.setNav(i)} key={i}>
                    {item}
                  </li>
                )
              }
          </ul>
          <div className="tabContent">
              {
                this.contentArr.map((item,i) =>
                  <div onClick={() => {this.setState({ current:i })}} className={this.setContent(i)} key={i}>
                    {item}
                  </div>
                )
              }
          </div>
          <TabBtn changeHandler={(e)=>this.changeHandler(e)} titleArr={this.titleArr}></TabBtn>
      </div>
    )
  }
}

export default Tab;