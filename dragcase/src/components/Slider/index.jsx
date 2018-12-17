import React from 'react';
import Setslider from './setSlider.js';
import './style.css';

class Slider extends React.Component {
  constructor(){
    super();  
  }

  clickPrev = () => {
    this.slider.prev();
  }

  clickNext = () => {
    this.slider.next();
  }

  touched = (e) => {
    this.slider.touchHandle();
  }

  componentDidMount() {
    this.slider = new Setslider(this.refs.container,this.refs.sliderContent,{
      speed: 1500,
    });
  }


  render() {
    return (
     <div className="container" ref="container" onTouchStart={(e)=>this.touched(e)}>
        <div className="prev" onClick={this.clickPrev}></div>
        <div className="next" onClick={this.clickNext}></div>
        <ul className="sliderContent" ref="sliderContent">
            <li className="sliderList" >1</li>
            <li className="sliderList" >2</li>
            <li className="sliderList" >3</li>
            <li className="sliderList" >4</li>
            <li className="sliderList" >5</li>
        </ul>
      </div>
    )
  }

}

export default Slider;