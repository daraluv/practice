import React from 'react';
import  * as setSlider from './setSlider.js';
import './style.css';

class Slider extends React.Component {
  constructor(){
    super();  

  }

  // clickHandler = () => {
  //   setSlider.prev(this.refs.sliderContent,this.refs.sliderList,{
  //     speed: 1500,
  //   });
  // }

  componentDidMount() {
    setSlider.slider(this.refs.sliderContent,this.refs.sliderList,{
      speed: 1500,
    });
  }


  render() {
    return (
     <div className="container" >
        <div className="turnDir">
          <div className="prev" onClick={this.clickHandler}></div>
          <div className="next"></div>
        </div>
        <ul className="sliderContent" ref="sliderContent">
            <li className="sliderList" ref="sliderList"></li>
            <li className="sliderList" ></li>
            <li className="sliderList" ></li>
            <li className="sliderList" ></li>
            <li className="sliderList" ></li>
        </ul>
      </div>
    )
  }

}

export default Slider;