import React from 'react';
import { animationFrame, cancelFrame, getStyle } from '../Animate/css3support';
import { animate } from '../Animate/animate';
import Drag from '../Drag/index';
import './style.css';

class Slider extends React.Component {
  constructor(props){
    super(props); 
    this.speed = this.props.speed || 2000;
    this.direction = this.props.direction ||'X';
    this.auto = this.props.auto || true;
    this.effect = this.props.effect ||'elasticInOut';
    this.data = this.props.data || [];
    this.length = this.data.length + 1;
    this.width = this.props.width || 200;
    this.height = this.props.width || 100;
    this.index = 0;
    this.timer = 0;

    if(this.direction === 'X') {
      this.dir = parseInt(this.width);
    }else{
      this.dir = parseInt(this.height);
    }

    if(this.auto) {
      this.timer = setInterval(this.autoPlay,this.speed);    
    }

  }

  setIndex = () => {
    const ele = this.refs.sliderContent;
    animate(ele, this.effect, {
      from: -this.dir * (this.index -1),
      to: -this.dir,
      direction: this.direction
    }, () => {
      if (this.index === this.length - 1) {
        this.index = 0;
        ele.style.transform = `translate${this.direction}(${0}px)`;
      }

      if (this.index < 0) {
        this.index = this.length - 1;
        ele.style.transform = `translate${this.direction}(${- this.index * this.dir}px)`;
      }
    });
  }

  clickPrev = () => {
    clearInterval(this.timer);
    this.index --;
    this.setIndex();
  }

  clickNext = () => {
    clearInterval(this.timer);
    this.index ++;
    this.setIndex();
  }

  autoPlay = () => {
    this.index ++;
    this.setIndex();
  }

  touchStart = (e) => {
    this.drag = new Drag(this.width);
    this.startVal = this.drag.dragStart(e);
  }

  touchEnd = (e) => {
    this.endVal = this.drag.dragMove(e);
    let that = this;
    let moveX = this.endVal.X - this.startVal.X;
    let moveY = this.endVal.Y - this.startVal.Y;
    let direction = 'left';
    if(Math.abs(moveX) > 60 || Math.abs(moveY) > 60){
      if(Math.abs(moveX) > Math.abs(moveY)){
        direction = moveX > 0 ? 'right' : 'left';             
      }else{
        direction = moveY > 0 ? 'down' : 'top';                       
      }

      if(direction ==='left' || direction ==='down') {
        this.clickNext();
      }

      if(direction ==='right'|| direction === 'top') {
        this.clickPrev();
      }   
    }
  }

  render() {
    const sliderItem = [...this.data,this.data[0]];
    return (
     <div className="container" ref="container" onTouchStart={(e)=>this.touchStart(e)}  onTouchEnd={(e)=>this.touchEnd(e)}>
        <div className="prev" onClick={this.clickPrev}></div>
        <div className="next" onClick={this.clickNext}></div>
        <ul className="sliderContent" ref="sliderContent">           
          {sliderItem.map((item,i) =>
            <li className="sliderItem" key={i}>{item}</li>)
          }
        </ul>
      </div>
    )
  }

}

export default Slider;